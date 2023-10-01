// Helpers
import { FC } from "react";

// Nested Components
import OrdersList from "./OrdersList";

// Styled Components
import { Container } from "../styled/Container.styled";

const OrdersContainer: FC = () => {
  return (
    <Container>
      <h1>Customer's Orders</h1>
      <OrdersList />
    </Container>
  );
};

export default OrdersContainer;
