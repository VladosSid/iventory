import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    showModal: false,
    idModalProducts: null,
    addModalOrder: false,
    addModalProd: false,

    prodactIsOpen: false,
  }),
});
