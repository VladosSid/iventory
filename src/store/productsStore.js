import { defineStore } from "pinia";

export const useProductsStore = defineStore("prodacts", {
  state: () => ({
    products: [
      {
        id: "11",
        serialNumber: "123",
        isNew: false,
        photo: "ImgProd.jpg",
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
        orderId: "1",
        date: "2017-06-29 12:09:33",
      },

      {
        id: "12",
        serialNumber: "1234",
        isNew: true,
        photo: "ImgProd.jpg",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 1110, symbol: "USD", isDefault: 0 },
          { value: 43852, symbol: "UAH", isDefault: 1 },
        ],
        orderId: "1",

        date: "2017-06-29 12:09:33",
      },

      {
        id: "21",
        serialNumber: "234",
        isNew: true,
        photo: "ImgProd.jpg",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        guarantee: {
          start: "2019-03-29 12:09:33",
          end: "2019-04-29 12:09:33",
        },
        price: [
          { value: 124, symbol: "USD", isDefault: 0 },
          { value: 2423, symbol: "UAH", isDefault: 1 },
        ],
        orderId: "2",
        date: "2015-06-29 12:09:33",
      },

      {
        id: "22",
        serialNumber: "2345",
        isNew: false,
        photo: "ImgProd.jpg",
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
        orderId: "2",
        date: "2016-10-29 12:09:33",
      },

      {
        id: "31",
        serialNumber: "345",
        isNew: true,
        photo: "ImgProd.jpg",
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
        orderId: "3",
        date: "2018-01-20 14:09:33",
      },
    ],
  }),
});
