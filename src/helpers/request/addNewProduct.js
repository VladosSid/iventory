import { boolean, object, string } from "yup";

import { useProductsStore } from "../../store/productsStore";

const schema = object({
  title: string().required(),
  serialNumber: string().required(),
  type: string().oneOf(["Monitors", "Phone"]).required(),
  orderId: string().required(),
  isNew: boolean().required(),
});

export default async function newProd() {
  const schemaNewProd = await schema.validate({
    title: useProductsStore().newProduct.title,
    serialNumber: useProductsStore().newProduct.serialNumber,
    type: useProductsStore().newProduct.type,
    orderId: useProductsStore().newProduct.orderId,
    isNew: useProductsStore().newProduct.isNew,
  });

  const checkTitle = useProductsStore().products.find(
    (prod) => prod.title === useProductsStore().newProduct.title
  );

  if (checkTitle) {
    return alert("Not Found");
  }

  console.log(schemaNewProd);
}
