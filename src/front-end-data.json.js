const orders = [
  {
    id: 1,
    title: "Длинное при длинное название",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products;
    },
  },
  {
    id: 2,
    title: "Самое длинное название, длинее всех длинных ",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products2;
    },
  },
  {
    id: 3,
    title: "Длинюююююююююююююююююющее название ",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products3;
    },
  },
];

const products = [
  {
    id: 11,
    serialNumber: 11111,
    isNew: 1,
    photo: "pathToFile.jpg",
    title: "Product 1",
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
    order: 1,
    date: "2017-06-29 12:09:33",
  },

  {
    id: 12,
    serialNumber: 111111,
    isNew: 1,
    photo: "pathToFile.jpg",
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
    order: 1,
    date: "2017-06-29 12:09:33",
  },
];

const products2 = [
  {
    id: 21,
    serialNumber: 11111,
    isNew: 1,
    photo: "pathToFile.jpg",
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
    order: 2,
    date: "2015-06-29 12:09:33",
  },

  {
    id: 22,
    serialNumber: 2222222,
    isNew: 1,
    photo: "pathToFile.jpg",
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
    order: 2,
    date: "2016-10-29 12:09:33",
  },
];

const products3 = [
  {
    id: 31,
    serialNumber: 333333,
    isNew: 1,
    photo: "pathToFile.jpg",
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
    order: 3,
    date: "2018-01-20 14:09:33",
  },
];

const data = { orders, products };
export default data;
