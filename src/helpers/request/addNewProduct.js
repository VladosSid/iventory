import { boolean, object, string } from "yup";

import { useGeneralStore } from "../../store/generalStore";
// import { useOrdersStore } from "../../store/ordersStore";

const schema = object({
  title: string().required(),
  serialNumber: string().required(),
  type: string().oneOf(["Monitors", "Phone"]).required(),
  orderId: string().required(),
  isNew: boolean().required(),
});

export default async function newProd() {
  const schemaNewProd = await schema.validate({
    title: useGeneralStore().newProduct.title,
    serialNumber: useGeneralStore().newProduct.serialNumber,
    type: useGeneralStore().newProduct.type,
    orderId: useGeneralStore().newProduct.orderId,
    isNew: useGeneralStore().newProduct.isNew,
  });

  const checkTitle = useGeneralStore().products.find(
    (prod) => prod.title === useGeneralStore().newProduct.title
  );

  if (checkTitle) {
    return alert("Not Found");
  }

  const id = `${Math.round(Math.random() * (9999 - 1000) + 1000)}-${Math.round(
    Math.random() * (9999 - 1000) + 1000
  )}-${Math.round(Math.random() * (9999 - 1000) + 1000)}`;

  const newProd = {
    id,
    ...schemaNewProd,
    guarantee: {
      start: `${new Date().toISOString().slice(0, 10)} ${new Date()
        .toISOString()
        .slice(11, 19)}`,
      end: `${new Date().toISOString().slice(0, 4) + 1}`,
    },
  };

  console.log(newProd);
}
