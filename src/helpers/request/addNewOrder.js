import { object, string } from "yup";

import { useOrdersStore } from "../../store/ordersStore";

const schema = object({ title: string().required().min(4) });

export default async function addNewOrder() {
  const newOrder = await schema.validate({
    title: useOrdersStore().newOrderTitle,
  });

  const checkTitle = useOrdersStore().orders.find(
    (order) => order.title === useOrdersStore().newOrderTitle
  );

  if (checkTitle) {
    return alert("Not Found");
  }

  alert("add");
}
