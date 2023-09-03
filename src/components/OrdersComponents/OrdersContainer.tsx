// Helpers
import { FC, useEffect } from "react";
import { useOrdersContext } from "../../utils/Hooks";

// Nested Components
import OrdersList from "./OrdersList";

// Styled Components
import { Container } from "../styled/Container.styled";

const OrdersContainer: FC = () => {
  // get setOrders method to store orders list to the store
  const { setOrders } = useOrdersContext();

  // fetch data and store it to the Orders store
  useEffect(() => {
    fetch("../db.json")
      .then((res) => res.json())
      .then((res) => {
        setOrders(res.orders);
      });
  }, [setOrders]);
  return (
    <Container>
      <h1>Customer's Orders</h1>
      <OrdersList />
    </Container>
  );
};

export default OrdersContainer;
