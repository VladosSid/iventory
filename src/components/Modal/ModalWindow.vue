<template>
  <div v-if="show" class="modal-shadow" @click.self="close">
    <div class="modal">
      <div class="modal-container">
        <div class="modal-container__close" @click="close">&#10006;</div>

        <slot name="body"> </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
import { useOrdersStore } from "../../store/ordersStore";
import { useProductsStore } from "../../store/productsStore";

import addNewOrder from "../../helpers/request/addNewOrder";
import newProd from "../../helpers/request/addNewProduct";

const show = useGeneralStore().showModal;

const close = () => {
  useGeneralStore().showModal = false;
  useGeneralStore().idModalProducts = null;
  useGeneralStore().addModalOrder = false;
  useGeneralStore().addModalProd = false;
  useOrdersStore().newOrderTitle = "";
  useProductsStore().newProduct = {
    serialNumber: "",
    title: "",
    type: "",
    orderId: "",
    isNew: false,
  };
};
</script>

<style scoped lang="scss">
.modal-shadow {
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.39);
}

.modal {
  width: 600px;

  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-container {
  padding-top: 15px;

  &__close {
    position: absolute;
    top: -15px;
    right: -15px;

    border-radius: 50%;
    color: #000;
    background: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;

    cursor: pointer;

    box-shadow: -10px 15px 42px -22px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -10px 15px 42px -22px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -10px 15px 42px -22px rgba(0, 0, 0, 0.75);
  }
}
</style>
