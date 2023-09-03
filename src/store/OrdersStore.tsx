import { FC, createContext, useCallback, useState } from "react";

import {
  OrderInterface,
  OrdersContextInterface,
  ChildrenInterface,
} from "../utils/Interface";

// Create Orders Context
export const OrdersContext = createContext<OrdersContextInterface | undefined>(
  undefined
);

export const OrdersProvider: FC<ChildrenInterface> = ({ children }) => {
  // store total orders data in ordersList
  const [ordersList, setOrdersList] = useState<OrderInterface[]>([]);
  // customerOrdersList is to store single customer orders depending on a customer_id sent from consuming component
  const [customerOrdersList, setCustomerOrdersList] = useState<
    OrderInterface[]
  >([]);

  // allow setting orders list from children components
  // useCallback to prevent unintended rerender due to use of useEffect in the consuming component
  const setOrders = useCallback((orders: OrderInterface[]) => {
    setOrdersList(orders);
  }, []);

  // allow setting single customers orders from children components
  // useCallback to prevent unintended rerender due to use of useEffect in the consuming component
  const setCustomerOrders = useCallback(
    (customer_id: number) => {
      const currentCustomerOrders = [...ordersList].filter(
        (order: OrderInterface) => order.customer_id === customer_id
      );
      setCustomerOrdersList(currentCustomerOrders);
    },
    [ordersList]
  );

  return (
    <OrdersContext.Provider
      value={{ setCustomerOrders, setOrders, customerOrdersList }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
