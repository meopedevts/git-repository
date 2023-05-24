import { useParams } from 'react-router-dom';
import { Container, Owner, Loading, BackButton, IssuesList, PageActions } from './Styles';
import { FaSpinner, FaArrowLeft } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { Api } from '../../services/Api';

export const Repositorio = (props) => {

  const { repositorio } = useParams();

  const [repositorios, setRepositorios] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

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
      setLoading(false);
    }

    load();
  }, [repositorio]);

  useEffect(() => {

    const loadIssue = async () => {
      const nomeRepo = repositorio;

      const response = await Api.get(`/repos/${nomeRepo}/issues`, {
        params: {
          state: 'open',
          page,
          per_page: 5,
        },
      });

      setIssues(response.data);
    };

    loadIssue();
  }, [repositorio, page])

  const handlePage = (action) => {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

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
        <BackButton to="/">
          <FaArrowLeft color="#000" size={30}/>
        </BackButton>
        <Owner>
          <img 
            src={repositorios.owner.avatar_url}
            alt={repositorios.owner.login}
          />
          <h1>{repositorios.name}</h1>
          <p>{repositorios.description}</p>
        </Owner>

        <IssuesList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url} target='_blank'>{issue.title}</a>

                  <div>
                    {issue.labels.map(label => (
                      <span key={String(label.id)}>{label.name}</span>
                    ))}
                  </div>
                </strong>

                <p>{issue.user.login}</p>

              </div>
            </li>
          ))}
        </IssuesList>

        <PageActions>
          <button 
            type="button" 
            onClick={() => handlePage('back')}
            disabled={page < 2}
          >
            Anterior
          </button>
          <button type="button" onClick={() => handlePage('next')}>
            Próxima
          </button>
        </PageActions>
      </Container>
    </>
  );
};