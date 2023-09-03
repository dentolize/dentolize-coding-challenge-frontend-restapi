// Helpers
import { FC } from "react";
import { Link } from "react-router-dom";

// Nested Components
import AddCustomerForm from "./AddCustomerForm";

// Styled Components
import { Container } from "../../styled/Container.styled";

const AddCustomerContainer: FC = () => {
  return (
    <Container>
      <h1>Add New Customer</h1>
      <Link to="/">Go back</Link>
      <AddCustomerForm />
    </Container>
  );
};

export default AddCustomerContainer;
