import { useOrdersStore } from "../store/ordersStore";
import { useProductsStore } from "../store/prodactsStore";

export function listProdacts(orderId, price) {
  const listId = useOrdersStore().orders.find(
    (order) => order.id === orderId
  ).productsId;

  const productList = [];
  listId.reduce((arr, i) => {
    productList.push(useProductsStore().products.find((prod) => prod.id === i));
  }, []);

  return productList;
}
