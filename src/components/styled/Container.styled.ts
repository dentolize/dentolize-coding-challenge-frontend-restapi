import { styled } from "styled-components";

export const Container = styled.main`
  max-width: 1500px;
  width:80%;
  margin: auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

  & > a{
    text-decoration:underline
  }

`