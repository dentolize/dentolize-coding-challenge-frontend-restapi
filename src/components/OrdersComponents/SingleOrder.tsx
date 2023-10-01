import { FC } from "react";
import { SingleOrderPropsInterface } from "../../utils/Interface";

// Styled Components
import { OrderContainer } from "../styled/OrdersStyled/Order.styled";
const SingleOrder: FC<SingleOrderPropsInterface> = ({ orderData }) => {
  return (
    <OrderContainer>
      <h3>{orderData.orderStatus}</h3>
      <p>
        {orderData.orderNumber}
        <br />
        {orderData.orderDate}
      </p>
    </OrderContainer>
  );
};

export default SingleOrder;
