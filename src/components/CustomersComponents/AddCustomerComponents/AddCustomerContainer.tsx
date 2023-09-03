// Helpers
import { FC } from "react";

// Nested Components
import AddCustomerForm from "./AddCustomerForm";
import { Link } from "react-router-dom";

const AddCustomerContainer: FC = () => {
  return (
    <main>
      <Link to="/">Go back</Link>
      <AddCustomerForm />
    </main>
  );
};

export default AddCustomerContainer;
