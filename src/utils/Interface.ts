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

// For single customer props
export interface SingleCustomerPropsInterface {
  customerData:CustomerInterface
}

// For children in the provider
export interface ChildrenInterface {
  children: ReactNode;
}


// Orders Interfaces
export interface OrderInterface {
  id: number;
  customer_id: number;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
}

export interface OrdersContextInterface {
  customerOrdersList: OrderInterface[];
  setCustomerOrders: (customer_id: number) => void;
}

// For single customer props
export interface SingleOrderPropsInterface {
  orderData:OrderInterface
}


// Add Customer interfaces 
export interface InputFieldProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}
