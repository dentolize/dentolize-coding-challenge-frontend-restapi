import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

// Customer interface to set Single customer data format
export interface CustomerInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

// Set type of properties and method provided by CustomerContext
export interface CustomersContextInterface {
  customersList: CustomerInterface[];
  setCustomers: (customers: CustomerInterface[]) => void;
}

// Create Customer Context
const CustomersContext = createContext<CustomersContextInterface | undefined>(
  undefined
);

// For children in the provider
interface ChildrenInterface {
  children: ReactNode;
}

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
