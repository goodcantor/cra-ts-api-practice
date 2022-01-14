import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
  }

  :root {
    --black: #21293c;
    --white: #ffffff;
    --grey: grey;


    --transition: all 0.3s ease;
  }
`;
