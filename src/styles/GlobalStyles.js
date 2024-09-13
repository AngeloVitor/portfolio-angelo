// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px; /* Base de 16px para calcular rem */
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #282A2D;
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden; /* Evita o scroll horizontal */
    transition: all 0.50s linear;
    position: relative;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #background-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none; /* Permite que cliques passem através da animação */
  }

  /* Media queries para responsividade */
  @media (max-width: 768px) {
    html {
      font-size: 14px; /* Reduz a base de fonte em dispositivos menores */
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px; /* Reduz ainda mais a fonte em dispositivos muito pequenos */
    }
  }
`;

export default GlobalStyles;
