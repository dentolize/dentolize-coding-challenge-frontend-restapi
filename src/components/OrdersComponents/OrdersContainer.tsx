import { FC, useEffect } from "react";
import { useOrdersContext } from "../../utils/Hooks";

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
  return <main></main>;
};

export default OrdersContainer;
