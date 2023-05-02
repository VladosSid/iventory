// import { useOrdersStore } from "../store/ordersStore";
// import { useProductsStore } from "../store/productsStore";
import { useGeneralStore } from "../store/generalStore";

export function listProdacts(orderId) {
  const listId = useGeneralStore().orders.find(
    (order) => order.id === orderId
  ).productsId;

  const productList = [];
  listId.reduce((arr, i) => {
    productList.push(useGeneralStore().products.find((prod) => prod.id === i));
  }, []);

  return productList;
}
