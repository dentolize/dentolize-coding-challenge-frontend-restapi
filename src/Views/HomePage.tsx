// Helpers
import { FC } from "react";
import { CustomersProvider } from "../store/CustomerStore";

// Nested Components
import CustomersContainer from "../components/CustomersComponents/CustomersContainer";

const HomePage: FC = () => {
  return (
    <CustomersProvider>
      <CustomersContainer />
    </CustomersProvider>
  );
};

export default HomePage;
