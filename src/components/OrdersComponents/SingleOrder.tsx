import { FC } from "react";
import { SingleOrderPropsInterface } from "../../utils/Interface";

const SingleOrder: FC<SingleOrderPropsInterface> = ({ orderData }) => {
  return (
    <div>
      {orderData.customer_id}
      <br />
      {orderData.id}, {orderData.orderNumber}
    </div>
  );
};

export default SingleOrder;
