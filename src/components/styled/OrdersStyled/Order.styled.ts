import { styled } from "styled-components";


export const OrdersContainer = styled.section`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap:0.5rem;

`

export const OrderContainer = styled.div`
  text-align:center;
  padding:.5rem;
  border:2px solid #5a5a5a;
  margin-bottom:.3rem;
  font-size:120%
`
