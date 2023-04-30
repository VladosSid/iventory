<template>
  <div v-if="show" class="modal-shadow" @click.self="close">
    <div class="modal">
      <div class="modal-container">
        <div class="modal-container__close" @click="close">&#10006;</div>

        <slot name="body"> </slot>
      </div>

      <div class="modal-container__footer">
        <button class="modal-container__footer__button-cancel" @click="close">
          Отмена
        </button>
        <button class="modal-container__footer__button" @click="submit">
          {{ useGeneralStore().addModalOrder ? "Добавить" : "Удлить" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
import { useOrdersStore } from "../../store/ordersStore";
import { useProductsStore } from "../../store/productsStore";

const show = useGeneralStore().showModal;

const close = () => {
  useGeneralStore().showModal = false;
  useGeneralStore().idModalProducts = null;
  useGeneralStore().addModalOrder = false;
  useGeneralStore().addModalProd = false;
  useOrdersStore().newOrderTitle = "";
};

const submit = () => {
  if (useGeneralStore().addModalOrder) {
    // SHEMA
    return console.log(useOrdersStore().newOrderTitle);
  }

  if (useGeneralStore().addModalProd) {
    // SHEMA
    return console.log("add PRODUCT");
  }

  console.log("order delete");
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

  &__footer {
    display: flex;
    justify-content: end;
    gap: 15px;
    background: green;
    padding: 15px;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    &__button-cancel {
      background: green;

      color: #fff;
      border: none;
      text-align: center;
      padding: 8px;
      font-size: 17px;
      font-weight: 500;
      min-width: 150px;
      border-radius: 30px;

      &:hover,
      &:focus {
        background: #000;
      }

      transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &__button {
      background: #fff;
      color: red;
      border: none;
      text-align: center;
      padding: 8px;
      font-size: 17px;
      font-weight: 500;
      min-width: 150px;
      border-radius: 30px;

      &:hover,
      &:focus {
        box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
        scale: 101%;
      }

      transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
        scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}
</style>
