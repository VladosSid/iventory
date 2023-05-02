import { object, string } from "yup";

// import { useOrdersStore } from "../../store/ordersStore";

const schema = object({ title: string().required().min(4) });

export default async function addNewOrder() {
  const schemaNewOrder = await schema.validate({
    title: useGeneralStore().newOrderTitle,
  });

  const checkTitle = useGeneralStore().orders.find(
    (order) => order.title === useGeneralStore().newOrderTitle
  );

  if (checkTitle) {
    return alert("Not Found");
  }

  const id = `${Math.round(Math.random() * (9999 - 1000) + 1000)}-${Math.round(
    Math.random() * (9999 - 1000) + 1000
  )}-${Math.round(Math.random() * (9999 - 1000) + 1000)}-${Math.round(
    Math.random() * (9999 - 1000) + 1000
  )}`;

  const newOrder = {
    id,
    ...schemaNewOrder,
    date: `${new Date().toISOString().slice(0, 10)} ${new Date()
      .toISOString()
      .slice(11, 19)}`,
    description: "",
    productsId: [],
  };

  const order = useGeneralStore();

  order.getAddNewOrder(newOrder);
}
