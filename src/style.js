import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #eee;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  ul, ol,li {
  list-style: none;
  }
`;


