import { FC, useEffect } from "react";
import { useCustomersContext } from "../utils/Hooks";

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

  return <div>CustomersContainer</div>;
};

export default CustomersContainer;
