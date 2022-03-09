import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family:'Times New Roman', Times, serif
      sans-serif;
  }
  body {
    background-color: #f7f4f4;
    color: #40514E;
  }
`;

const ButtonPages = styled.button `
  margin: 10px 30px ;
    padding: 6px 10px;
    border-radius: 5px;
    border: none;
    background-color: #999966;
    :active {
      border: 1px solid #d5caca;
      background-color: #f7f4f4;
    }
`

export { GlobalStyle, ButtonPages }