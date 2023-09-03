// helpers
import { FC } from "react";
import { useOrdersContext } from "../../utils/Hooks";
import { OrderInterface } from "../../utils/Interface";
import SingleOrder from "./SingleOrder";

const OrdersList: FC = () => {
  const { ordersList } = useOrdersContext();

  return (
    <section>
      {ordersList.map((order: OrderInterface) => {
        return <SingleOrder key={order.id} orderData={order} />;
      })}
    </section>
  );
};

export default OrdersList;
