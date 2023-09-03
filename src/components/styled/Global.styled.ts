import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width:100%;
  min-width: 320px;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height:1.3;
  background:#f2f1ff;
  color: #5a5a5a
}

a {
  text-decoration: none;
  color:inherit;
  font-size: 1.3rem;
  margin:1rem 0;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
  text-align:center;
}

section{
  width:100%;
}


`;
