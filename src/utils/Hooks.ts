import { useContext } from "react";
import { CustomersContext } from "../store/CustomerStore";
import { OrdersContext } from "../store/OrdersStore";

// create custom hook to facilitate usage of the context and handle error of using context values
// (properties and methods ) without provider
export const useCustomersContext = () => {
  const customersContext = useContext(CustomersContext);

  if (!customersContext)
    throw new Error("You need to use this context inside CustomerProvider");
  
  return customersContext;
};



// create custom hook to facilitate usage of the context and handle error of using context values
// (properties and methods ) without provider
export const useOrdersContext = () => {
  const ordersContext = useContext(OrdersContext);

  if (!ordersContext)
    throw new Error("You need to use this context inside OrderProvider");

  return ordersContext;
};