// Helpers
import { FC } from "react";

// Nested Components
import OrdersContainer from "../components/OrdersComponents/OrdersContainer";
import { OrdersProvider } from "../store/OrdersStore";

const OrdersPage: FC = () => {
  return (
    <OrdersProvider>
      <OrdersContainer />
    </OrdersProvider>
  );
};

export default OrdersPage;
