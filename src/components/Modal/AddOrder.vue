<template>
  <h3 class="add-order__title">
    <slot name="title"></slot>
  </h3>

  <form style="padding: 15px">
    <label
      for="orderName"
      style="display: grid; grid-template-rows: 1fr 1fr; grid-gap: 5px"
    >
      Введите название прихода
      <input
        v-model="useGeneralStore().newOrderTitle"
        type="text"
        name="orderName"
        class="input"
        placeholder="order name"
      />
    </label>
  </form>

  <div class="add-order__footer">
    <button class="add-order__footer__button-cancel" @click="close">
      Отмена
    </button>
    <button class="add-order__footer__button" @click="submit">
      <slot name="button"></slot>
    </button>
  </div>
</template>

<script setup>
import { onUnmounted } from "vue";

// import { useOrdersStore } from "../../store/ordersStore";
import { useGeneralStore } from "../../store/generalStore";

import addNewOrder from "../../helpers/request/addNewOrder";

const close = () => {
  useGeneralStore().showModal = false;
  useGeneralStore().addModalOrder = false;
};

const submit = () => {
  addNewOrder();
};

onUnmounted(() => {
  useGeneralStore().newOrderTitle = "";
});
</script>

<style lang="scss" scoped>
.input {
  padding: 5px 10px;
  font-weight: 700;
  color: #000;
  background: #c7c7c6;
  border: none;
  border-radius: 4px;
  outline: none;
  box-shadow: 0px 23px 6px -21px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: 0px 23px 6px -21px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: 0px 23px 6px -21px rgba(0, 0, 0, 0.75) inset;
}

.add-order__title {
  padding-left: 15px;
  padding-right: 15px;
}

.add-order__footer {
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
</style>
