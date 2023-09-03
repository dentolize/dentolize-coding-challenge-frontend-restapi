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

  // allow setting orders list from children components
  // useCallback to prevent unintended rerender due to use of useEffect in the consuming component
  const setOrders = useCallback((orders: OrderInterface[]) => {
    setOrdersList(orders);
  }, []);

  return (
    <OrdersContext.Provider value={{ ordersList, setOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};
