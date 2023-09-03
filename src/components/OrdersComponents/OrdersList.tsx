// helpers
import { FC } from "react";
import { useOrdersContext } from "../../utils/Hooks";
import { OrderInterface } from "../../utils/Interface";

const OrdersList: FC = () => {
  const { ordersList } = useOrdersContext();

  return (
    <section>
      {ordersList.map((order: OrderInterface) => {
        return (
          <div key={order.id}>
            {order.customer_id}
            <br />
            {order.id}, {order.orderNumber}
          </div>
        );
      })}
    </section>
  );
};

export default OrdersList;
