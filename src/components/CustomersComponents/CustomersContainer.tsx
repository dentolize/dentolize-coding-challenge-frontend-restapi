// Helpers
import { FC, useEffect } from "react";
import { useCustomersContext } from "../../utils/Hooks";

// Nested components
import CustomersList from "./CustomersList";
import { Link } from "react-router-dom";

const CustomersContainer: FC = () => {
  // get setCustomers method to store customers list to the store
  const { setCustomers } = useCustomersContext();

  // fetch data and store it to the Customers store
  useEffect(() => {
    fetch("../db.json")
      .then((res) => res.json())
      .then((res) => {
        setCustomers(res.customers);
      });
  }, [setCustomers]);

  return (
    <main>
      <Link to="/add_customer">Add New Customer</Link>
      <CustomersList />
    </main>
  );
};

export default CustomersContainer;
