// Helpers
import { FC } from "react";
import { useCustomersContext } from "../utils/Hooks";
import { CustomerInterface } from "../utils/Interface";

// Nested components
import SingleCustomer from "./SingleCustomer";

const CustomersList: FC = () => {
  // get customers list from Customers store
  const { customersList } = useCustomersContext();

  return (
    <section>
      {customersList.map((customerData: CustomerInterface) => {
        return (
          <SingleCustomer key={customerData.id} customerData={customerData} />
        );
      })}
    </section>
  );
};

export default CustomersList;
