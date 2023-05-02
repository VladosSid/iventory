import { boolean, object, string } from "yup";

import { useGeneralStore } from "../../store/generalStore";
import currentDate from "../../helpers/currentDate";
const schema = object({
  title: string().required(),
  serialNumber: string().required(),
  type: string().oneOf(["Monitors", "Phone"]).required(),
  orderId: string().required(),
  isNew: boolean().required(),
});

export default async function newProd() {
  const { minutes, hours, day, month, year, seconds } = currentDate();
  const schemaNewProd = await schema.validate({
    title: useGeneralStore().newProduct.title,
    serialNumber: useGeneralStore().newProduct.serialNumber,
    type: useGeneralStore().newProduct.type,
    orderId: useGeneralStore().idOpenOrder,
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
      end: `${(
        Number(new Date().toISOString().slice(0, 4)) + 1
      ).toString()}-${new Date().toISOString().slice(5, 10)} ${new Date()
        .toISOString()
        .slice(11, 19)}`,
      price: [
        { value: 503, symbol: "USD", isDefault: 0 },
        { value: 1234, symbol: "UAH", isDefault: 1 },
      ],

      date: `${new Date().toISOString().slice(0, 10)} ${new Date()
        .toISOString()
        .slice(11, 19)}`,
      photo: "ImgProd.jpg",
    },
  };

  useGeneralStore().getAddNewProduct(newProd);
}
