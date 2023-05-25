import { styled, keyframes, css } from "styled-components";
import { Link } from 'react-router-dom';
import { StylesConfig } from 'react-select';
import { FaBars } from 'react-icons/fa';

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
  padding: 1.875rem;
  margin: 5rem auto;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #ddd;

  img{
    width: 9.375rem;
    border-radius: 20%;
    margin: 1.25rem 0;
  }

  h1{
    font-size: 1.875rem;
    color: #0D2636
  }

  p{
    margin-top: 0.5rem;
    padding-bottom: 0.25rem;
    font-size: 1rem;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 25rem;
  }
`;

export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background: transparent;
`

export const IssuesList = styled.ul`
  margin-left: 1.875rem;
  padding-top: 1.875rem;
  /* border-top: 1px solid #ddd; */
  list-style: none;

  li{
    display: flex;
    padding: 1rem 0.635rem;

    & + li{
      margin-top: 0.75rem;
      border-top: 1px solid #eee;
    }
  }

  img{
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    border: 2px solid #0D2636;

  }

  div{
    flex: 1;
    margin-left: 0.75rem;

    p{
      margin-top: 0.625rem;
      font-size: 1rem;
      color: #000;
    }
  }

  strong{
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    
    a{
      text-decoration: none;
      color: #222;
      font-size: 1.25rem;
      transform: 0.3s;

      &:hover{
        color: #0071db;
      }
    }

    div{
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      border: 0;
      padding: 0;
      outline: 0;
      margin: 0.5rem 0;
    }

    span{
      background: #222;
      color: #fff;
      border-radius: 0.5rem;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.5rem 0.438rem;
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  button{
    outline: 0;
    border: 0;
    background: #222;
    color: #fff;
    padding: 0.313rem 0.625rem;
    border-radius: 0.25rem;

    &:disabled{
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const SelectStyle: StylesConfig = {
  container: (provided) => ({
    ...provided,
    paddingTop: '0.5rem',
    width: '20%',
    background: 'transparent',
    border: '0',
    outline: '0',
    margin: '0',
    borderRadius: '0%',
  }),
  
  control: (provided, state) => ({
    ...provided,
    background: '#222',
    color: '#fff',
    borderRadius: state.menuIsOpen ? '0.25rem 0.25rem 0 0' : '0.25rem',
    border: 'none',
    cursor: 'pointer',
    boxShadow: 'none',
  }),

  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
  }),

  menu: (provided) => ({
    ...provided,
    background: '#222',
    border: '0',
    outline: '0',
    margin: '0',
    borderRadius: '0 0 0.25rem 0.25rem',
  }),

  option: (provided, { isFocused } ) => ({
    ...provided,
    color: '#fff',
    background: isFocused ? '#444' : 'transparent',
    cursor: 'pointer',
  }),
};

export const CustomDropdown = () => {
  return (
    <FaBars size={35} style={{
      padding: '0 0.5rem',
    }}/>
  )
}