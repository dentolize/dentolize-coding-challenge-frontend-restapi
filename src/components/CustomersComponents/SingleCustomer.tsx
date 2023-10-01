import { FC } from "react";
import { SingleCustomerPropsInterface } from "../../utils/Interface";
import { Link } from "react-router-dom";

// styled components
import { CustomerContainer } from "../styled/CustomersStyled/Customer.styled";

const SingleCustomer: FC<SingleCustomerPropsInterface> = ({ customerData }) => {
  return (
    <Link to={`/orders/${customerData.id}`}>
      <CustomerContainer>
        <span>
          {customerData.firstName} {customerData.lastName}
        </span>

        <span>{customerData.email} </span>
        <span>{customerData.phone} </span>
      </CustomerContainer>
    </Link>
  );
};

export default SingleCustomer;
