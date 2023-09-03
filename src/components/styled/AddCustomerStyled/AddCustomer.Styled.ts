import { styled } from "styled-components";

export const FormStyled = styled.form`
width:100%;
max-width:40rem;
margin:1rem 0;

& > div {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-gap:.7rem;
}

input[type="submit"]{
  width:100%;
  max-width:15rem;
  margin:.5rem auto;
  font-size:1.2rem;
  font-weight:bold;
  padding:.5rem;
  border:1px solid #606060;
  color:#606060;
}

`

export const InputStyled = styled.input`
font-size:1.2rem;
padding:.6rem;
margin:.5rem;
width:100%;
outline: 1px solid #5a5a5a;
border:none;
color:#5a5a5a

`
