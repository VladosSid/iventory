import { useOrdersStore } from "../store/ordersStore";
import { useProductsStore } from "../store/productsStore";

export function listProdacts(orderId) {
  const listId = useOrdersStore().orders.find(
    (order) => order.id === orderId
  ).productsId;

  const productList = [];
  listId.reduce((arr, i) => {
    productList.push(useProductsStore().products.find((prod) => prod.id === i));
  }, []);

  return productList;
}
