import { useParams } from 'react-router-dom';
import { Container, Owner, Loading } from './Styles';
import { FaSpinner } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { Api } from '../../services/Api';

export const Repositorio = (props) => {

  const { repositorio } = useParams();

  const [repositorios, setRepositorios] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const nomeRepo = repositorio;
      const [repositorioData, issuesData] = await Promise.all([
        Api.get(`/repos/${nomeRepo}`),
        Api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: 'open',
            per_page: 5
          }
        })
      ]);

      setRepositorios(repositorioData.data);
      setIssues(issuesData.data);
      //setLoading(false);
    }

    load();
  }, [repositorio]);

  if (loading) {
    return(
      <Loading loading={loading ? 1 : 0}>
        <h1>Carregando</h1>
        <FaSpinner color="#FFF" size={35} />
      </Loading>
    )
  };

  return (
    <>
      <Container>
        <Owner>
          <img 
            src={repositorios.owner.avatar_url}
            alt={repositorios.owner.login}
          />
          <h1>{repositorios.name}</h1>
          <p>{repositorios.description}</p>
        </Owner>
      </Container>
    </>
  );
};