import { FC } from "react";
import { SingleCustomerPropsInterface } from "../utils/Interface";
import { Link } from "react-router-dom";

const SingleCustomer: FC<SingleCustomerPropsInterface> = ({ customerData }) => {
  return (
    <Link to="/">
      <div>
        {customerData.firstName}, {customerData.lastName}, {customerData.email},{" "}
        {customerData.phone}{" "}
      </div>
    </Link>
  );
};

export default SingleCustomer;
