import { ReactNode } from "react";
// Customers Interface

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

// For children in the provider
export interface ChildrenInterface {
  children: ReactNode;
}
