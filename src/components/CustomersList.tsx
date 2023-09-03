import { FC } from "react";
import { useCustomersContext } from "../utils/Hooks";
import { CustomerInterface } from "../utils/Interface";

const CustomersList: FC = () => {
  // get customers list from Customers store
  const { customersList } = useCustomersContext();

  return (
    <section>
      {customersList.map((customerData: CustomerInterface) => {
        return <p key={customerData.id}>{customerData.firstName}</p>;
      })}
    </section>
  );
};

export default CustomersList;
