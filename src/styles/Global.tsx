import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background: #0D2636;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    color: #222;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #0D2636;
    border: 0.5px solid #fff;
    border-radius: 0.25rem;
  }
`;