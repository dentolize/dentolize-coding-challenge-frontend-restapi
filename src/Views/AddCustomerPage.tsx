// Helpers
import { FC } from "react";
import { CustomersProvider } from "../store/CustomerStore";

const AddCustomerPage: FC = () => {
  return <CustomersProvider>AddCustomerPage</CustomersProvider>;
};

export default AddCustomerPage;
