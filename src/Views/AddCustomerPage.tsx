// Helpers
import { FC } from "react";
import { CustomersProvider } from "../store/CustomerStore";

// Nested Components
import AddCustomerContainer from "../components/CustomersComponents/AddCustomerComponents/AddCustomerContainer";

const AddCustomerPage: FC = () => {
  return (
    <CustomersProvider>
      <AddCustomerContainer />
    </CustomersProvider>
  );
};

export default AddCustomerPage;
