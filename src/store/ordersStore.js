import { defineStore } from "pinia";

import { useProductsStore } from "./productsStore";

export const useOrdersStore = defineStore("orders", {
  state: () => ({
    orders: [
      {
        id: "1",
        title: "Длинное при длинное название",
        date: "2017-06-29 12:09:33",
        description: "desc",
        productsId: ["11", "12"],
      },
      {
        id: "2",
        title: "Самое длинное название, длинее всех длинных ",
        date: "2015-06-29 12:09:33",
        description: "desc",
        productsId: ["21", "22"],
      },
      {
        id: "3",
        title: "Длинюю ююю юююююю юююю ююющее название ",
        date: "2018-01-20 14:09:33",
        description: "desc",
        productsId: ["31"],
      },
    ],

    searchQuery: "",

    isOpen: false,
    idOpenOrder: null,
    currentOrderOpenId: null,
    currentOrderProd: [],
    newOrderTitle: "",
  }),

  getters: {
    currentOrderProduct(state) {
      if (!state.idOpenOrder) {
        state.currentOrderProd = [];
        return;
      }

      state.currentOrderProd = [];

      const listId = state.orders.find(
        (order) => order.id === state.idOpenOrder
      ).productsId;

      listId.reduce((arr, i) => {
        state.currentOrderProd.push(
          useProductsStore().products.find((prod) => prod.id === i)
        );
      }, []);
    },

    filterOrders(state) {
      return state.orders.filter((order) =>
        order.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );

      filterList;
    },
  },

  actions: {
    getAddNewOrder(newOrder) {
      try {
        this.orders.push(newOrder);
        return this.orders;
      } catch (err) {
        console.log(err.message);
      }
    },

    getDeleteOrder(idOrder) {
      try {
        this.orders = this.orders.filter((order) => order.id !== idOrder);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
});
