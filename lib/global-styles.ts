import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  *:before, *:after {
    box-sizing: border-box;
  }
  html {
    background: url("/images/santorini_background.jpg") no-repeat center center fixed;
    background-size: cover;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0;
    line-height: 1.15;
    padding: 0;
    -webkit-text-size-adjust: 100%;
  }
  body,
  h2,
  h3,
  h4,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  p {
    line-height: 1.4;
    margin: 0.5em 0;
  }

  ul[class],
  ol[class] {
    list-style: none;
    padding: 0;
  }

  a {
    background-color: transparent;
  }

  blockquote {
    border-left: 10px solid #ccc;
    line-height: 1.15;
    margin: .5em 10px;
    padding: 10px 20px;
    font-family: Helvetica;
    font-style: italic;
  }
`;
