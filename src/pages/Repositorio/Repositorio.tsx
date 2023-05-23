import { useParams } from 'react-router-dom';

export const Repositorio = (props) => {

  const { repositorio } = useParams();

  return (
    <div>
      <h1 style={{color: '#FFF'}}>
        {decodeURIComponent(repositorio)}
        </h1>
    </div>
  );
};