import { defineStore } from "pinia";

export const useOrdersStore = defineStore("orders", {
  state: () => ({
    orders: [
      {
        id: 1,
        title: "Длинное при длинное название",
        date: "2017-06-29 12:09:33",
        description: "desc",
        productsId: ["11", "12"],
      },
      {
        id: 2,
        title: "Самое длинное название, длинее всех длинных ",
        date: "2017-06-29 12:09:33",
        description: "desc",
        productsId: ["21", "22"],
      },
      {
        id: 3,
        title: "Длинюююююююююююююююююющее название ",
        date: "2017-06-29 12:09:33",
        description: "desc",
        productsId: ["31"],
      },
    ],
  }),
});
