import { Container, Form, SubmitButton, List, DeleteButton } from './Styles';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import { useState, useCallback, useEffect } from 'react';
import { Api }  from '../../services/Api';

export const Main = () => {

  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  //Buscar
  useEffect(() => {
    const repoStorage = localStorage.getItem('repos');
    
    if (repoStorage) {
      setRepositorios(JSON.parse(repoStorage));
    };
  }, [])

  //Salvar alterações
  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repositorios));
  }, [repositorios])

  const handleSubmit =  useCallback((e: any) => {
    e.preventDefault();
    setLoading(true);
    setAlert(false);
    const submit = async () => {
      try {  
          if (newRepo === '') {
            throw new Error('Você precisa indicar um repositório');
          };

          const response = await Api.get(`repos/${newRepo}`);

          const hasRepo = repositorios.find(repo => repo.name === newRepo);

          if (hasRepo) {
            throw new Error('Repositório duplicado');
          }
        
          const data = {
            name: response.data.full_name,
          }
      
          setRepositorios([...repositorios, data]);
          setNewRepo('');
      } catch(error) {
          setAlert(true);
      } finally {
          setLoading(false);
      }
    }
    submit();

  }, [newRepo, repositorios]);

  const handleInputChange = (e: any) => {
    setNewRepo(e.target.value);
    setAlert(false);
  };

  const handleDelete = useCallback((repo) => {
    const find = repositorios.filter(r => r.name !== repo);
    setRepositorios(find);
  }, [repositorios])

  return (
    <Container>
      <h1>
        <FaGithub size={25}/>
        Meus repositórios
      </h1>

      <Form onSubmit={handleSubmit} error={alert}>
        <input 
        type="text" 
        placeholder="Adicionar Repositórios"
        value={newRepo}
        onChange={handleInputChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositorios.map(repo => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick={() => handleDelete(repo.name)}>
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>
            <a href="">
              <FaBars size={20} />
            </a>
          </li>
        ))}
      </List>
    </Container>
  );
};