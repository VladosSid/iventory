import { createRouter, createWebHistory } from "vue-router";

import Orders from "../pages/Orders.vue";
import Products from "../pages/Products.vue";

const routes = [
  {
    path: "/orders",
    name: "orders",
    component: Orders,
  },

  {
    path: "/products",
    name: "products",
    component: Products,
  },

  {
    path: "/",
    redirect: "/orders",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
