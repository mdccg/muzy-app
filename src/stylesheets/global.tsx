import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    font-family: 'Lato', sans-serif;
  }

  body, #root {
    flex-direction: column;
    min-height: 100vh;
    display: flex;
  }
`;

export default GlobalStyles;