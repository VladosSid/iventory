import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    showModal: false,
    idModalProducts: null,

    // add Modal
    addModalOrder: false,
    addModalProd: false,
    // delete modal
    idDeleteOrder: false,
    openModalDelete: false,
    idDeleteProduct: false,

    // ORDER STORE
    // current order product
    searchQuery: "",

    isOpen: false,
    idOpenOrder: null,
    currentOrderOpenId: null,
    currentOrderProd: [],

    newOrderTitle: "",

    // PRODUCTS STORE
    prodactIsOpen: false,
    newProduct: {
      serialNumber: "",
      title: "",
      type: "",
      orderId: "",
      isNew: false,
    },

    orders: [
      {
        id: "1as134fsd",
        title: "Длинное при длинное название",
        date: "2017-06-29 12:09:33",
        description: "desc",
        productsId: ["11", "12"],
      },
      {
        id: "223fsf2",
        title: "Самое длинное название, длинее всех длинных ",
        date: "2015-06-29 12:09:33",
        description: "desc",
        productsId: ["21", "22"],
      },
      {
        id: "3234fs3",
        title: "Длинюю ююю юююююю юююю ююющее название ",
        date: "2018-01-20 14:09:33",
        description: "desc",
        productsId: ["31"],
      },
    ],

    products: [
      {
        id: "11",
        serialNumber: "123",
        isNew: false,
        photo: "monitor.png",
        title: "Gigabyte Technology X58-USB3 (Socket 1366) 6",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 503, symbol: "USD", isDefault: 0 },
          { value: 1234, symbol: "UAH", isDefault: 1 },
        ],
        orderId: "1as134fsd",
        date: "2017-06-29 12:09:33",
      },

      {
        id: "12",
        serialNumber: "1234",
        isNew: true,
        photo:
          "https://photos.google.com/photo/AF1QipM8j2kZ88-NahXYp2ZdUazLUsPHKuOtj0mBAdd8",
        title: "Product 1",
        type: "Phone",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 1110, symbol: "USD", isDefault: 0 },
          { value: 43852, symbol: "UAH", isDefault: 1 },
        ],
        orderId: "1as134fsd",

        date: "2017-06-29 12:09:33",
      },

      {
        id: "21",
        serialNumber: "234",
        isNew: true,
        photo:
          "https://drive.google.com/file/d/1GWg2VSq2H7D3dmyiR5lkkgKYEZTeEcYa/view?usp=share_link",
        title: "Product 1",
        type: "Phone",
        specification: "Specification 1",
        guarantee: {
          start: "2019-03-29 12:09:33",
          end: "2019-04-29 12:09:33",
        },
        price: [
          { value: 124, symbol: "USD", isDefault: 0 },
          { value: 2423, symbol: "UAH", isDefault: 1 },
        ],
        orderId: "223fsf2",
        date: "2015-06-29 12:09:33",
      },

      {
        id: "22",
        serialNumber: "2345",
        isNew: false,
        photo: "monitor.png",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2019-01-29 12:09:33",
          end: "2019-01-30 12:09:33",
        },
        price: [
          { value: 6785, symbol: "USD", isDefault: 0 },
          { value: 2125, symbol: "UAH", isDefault: 1 },
        ],
        orderId: "223fsf2",
        date: "2016-10-29 12:09:33",
      },

      {
        id: "31",
        serialNumber: "345",
        isNew: true,
        photo: "monitor.png",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 1050, symbol: "USD", isDefault: 0 },
          { value: 260465, symbol: "UAH", isDefault: 1 },
        ],
        orderId: "3234fs3",
        date: "2018-01-20 14:09:33",
      },
    ],
  }),

  getters: {
    currentOrderProduct(state) {
      if (!state.idOpenOrder) {
        state.currentOrderProd = [];
        return;
      }

      this.currentOrderProd = [];

      const listId = state.orders.find(
        (order) => order.id === state.idOpenOrder
      ).productsId;

      listId.reduce((arr, i) => {
        state.currentOrderProd.push(
          state.products.find((prod) => prod.id === i)
        );
      }, []);
    },

    filterOrders() {
      return this.orders.filter((order) =>
        order.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  actions: {
    // Orders
    getAddNewOrder(newOrder) {
      try {
        this.orders.push(newOrder);
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

    // Products
    getAddNewProduct(newProduct) {
      try {
        this.products.push(newProduct);

        const order = this.orders.find(
          (order) => order.id === newProduct.orderId
        );
        order.productsId.push(newProduct.id);
      } catch (err) {
        console.log(err.message);
      }
    },

    getDeleteProduct(idProd) {
      console.log("id Prod", idProd);
      try {
        const idOrder = this.products.find((prod) => prod.id === idProd);

        console.log("id order", idOrder);

        const order = this.orders.findIndex(
          (order) => order.id === idOrder.orderId
        );

        console.log("order", order);

        const idIndex = this.orders[order].productsId.findIndex(
          (id) => id === idProd
        );

        this.orders[order].productsId.splice(idIndex, 1);

        this.products = this.products.filter((prod) => prod.id !== idProd);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
});
