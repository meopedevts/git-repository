import styled, { keyframes, css } from 'styled-components';
 
export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 1.875rem;
  margin: 5rem auto;

  h1{
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg{
      margin-right: 0.625rem;
    }
  }
`;

export const Form = styled.form`
  margin-top: 1.875rem;
  display: flex;
  flex-direction: row;

  input{
    flex: 1;
    border: 1px solid ${props => (props.error ? "#FF0000" : "#EEE")};
    padding: 0.625rem 0.938rem;
    border-radius: 0.25rem;
    font-size: 1rem;
  }
`;

//Criando animação do botão

const animated = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #0D2636;
  border: 0;
  border-radius: 0.25rem;
  margin-left: 0.625rem;
  padding: 0 0.938rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled]{
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props => props.loading && 
    css`
      svg{
        animation: ${animated} 2s linear infinite;
      }
    `
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 1.25rem;

  li{
    padding: 0.938rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + li{
      border-top: 1px solid #eee;
    }

    a{
      color: #0D2636;
      text-decoration: none;
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: 'button'
})`
  background: transparent;
  color: #0D2636;
  border: 0;
  padding: 0.5rem 0.5rem;
  outline: 0;
  border-radius: 0.25rem;
`;