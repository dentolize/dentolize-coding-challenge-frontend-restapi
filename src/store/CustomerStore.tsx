import { FC, createContext, useCallback, useContext, useState } from "react";

import {
  CustomerInterface,
  CustomersContextInterface,
  ChildrenInterface,
} from "../utils/Interface";

// Create Customer Context
const CustomersContext = createContext<CustomersContextInterface | undefined>(
  undefined
);

export const CustomersProvider: FC<ChildrenInterface> = ({ children }) => {
  // store customers data in customersList
  const [customersList, setCustomersList] = useState<CustomerInterface[]>([]);

  // allow setting customers list from children components
  const setCustomers = useCallback((customers: CustomerInterface[]) => {
    setCustomersList(customers);
  }, []);

  return (
    <CustomersContext.Provider value={{ customersList, setCustomers }}>
      {children}
    </CustomersContext.Provider>
  );
};

// create custom hook to facilitate usage of the context and handle error of using context values
// (properties and methods ) without provider
export const useCustomersContext = () => {
  const customersContext = useContext(CustomersContext);

  if (!customersContext)
    throw new Error("You need to use this context inside CustomerProvider");

  return customersContext;
};
