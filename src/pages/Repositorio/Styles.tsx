import { styled, keyframes, css } from "styled-components";

const animated = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div.attrs(props => ({
}))`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${props => props.loading && 
    css`
      svg{
        animation: ${animated} 2s linear infinite;
      }
    `
  }
`;

export const Container = styled.div`
  max-width: 43.75rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.2);
  padding: 0 1.875rem;
  margin: 5rem auto;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 9.375rem;
    border-radius: 20%;
    margin: 1.25rem 0;
  }
`;