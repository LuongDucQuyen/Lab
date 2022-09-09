import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Gilroy;
  }
  body {
    overflow-x: hidden;
    min-height: 100vh;
    background-position: center;
    position: relative;
    z-index: 99;
  
    img {
      height: auto;
      max-width: 100%;
    }
  }
  body::-webkit-scrollbar{
    width: 0px;
  }
  iframe {
    display: none;
  }

  li {
      list-style-type: none
    }
`;

export default GlobalStyle;
