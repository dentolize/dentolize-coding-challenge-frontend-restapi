import { FC, createContext, useCallback, useState } from "react";

import {
  CustomerInterface,
  CustomersContextInterface,
  ChildrenInterface,
} from "../utils/Interface";

// Create Customer Context
export const CustomersContext = createContext<
  CustomersContextInterface | undefined
>(undefined);

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
