import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

export const globalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    min-height: 100%;
  }
  body{
    background-image: url(${background});
    background-attachment: fixed;

    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: 'Fira Sans', sans-serif;
  }
  button{
    cursor: pointer;
  }
`;
