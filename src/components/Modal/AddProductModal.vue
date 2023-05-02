<template>
  <h3 style="padding-left: 15px; padding-right: 15px">
    <slot name="title"></slot>
  </h3>

  <form style="padding: 15px">
    <label
      for="prodName"
      style="display: grid; grid-template-rows: 1fr 1fr; grid-gap: 5px"
    >
      Название продукта
      <input
        v-model="useGeneralStore().newProduct.title"
        type="text"
        name="prodName"
        class="input"
        placeholder="product name"
      />
    </label>

    <label
      for="serialNumber"
      style="display: grid; grid-template-rows: 1fr 1fr; grid-gap: 5px"
    >
      Серийний номер продукта
      <input
        v-model="useGeneralStore().newProduct.serialNumber"
        type="text"
        name="serialNumber"
        class="input"
        placeholder="serial number"
      />
    </label>

    <div id="v-model-radiobutton">
      <label for="used"> Used </label>
      <input
        type="radio"
        name="isNew"
        id="used"
        value="false"
        checked
        @input="useGeneralStore().newProduct.isNew = false"
      />

      <label for="isNew"> New </label>
      <input
        type="radio"
        name="isNew"
        id="isNew"
        value="true"
        @input="useGeneralStore().newProduct.isNew = true"
      />
    </div>

    <label
      for="prodName"
      style="display: grid; grid-template-rows: 1fr 1fr; grid-gap: 5px"
    >
      Тип продукта

      <select name="list-type" @input="(e) => selected(e)">
        <option></option>
        <option value="Monitors">Monitors</option>
        <option value="Phone">Phone</option>
      </select>
    </label>
  </form>

  <p style="padding: 0 15px">
    Продукт будет добавлен в приход: <br />"{{ orderTitle.title }}"
  </p>

  <div class="add-prod__footer">
    <button class="add-prod__footer__button-cancel" @click="close">
      Отмена
    </button>
    <button class="add-prod__footer__button" @click="submit">
      <slot name="button"></slot>
    </button>
  </div>
</template>

<script setup>
import { onUnmounted } from "vue";

// import { useProductsStore } from "../../store/productsStore";
// import { useOrdersStore } from "../../store/ordersStore";
import { useGeneralStore } from "../../store/generalStore";

import newProd from "../../helpers/request/addNewProduct";

const selected = (e) => {
  useGeneralStore().newProduct.type = e.target.value;
};

const orderTitle = useGeneralStore().orders.find(
  (order) => order.id === useGeneralStore().idOpenOrder
);

const close = () => {
  useGeneralStore().showModal = false;
  useGeneralStore().addModalProd = false;
};

const submit = () => {
  newProd();
};

onUnmounted(() => {
  useGeneralStore().newProduct = {
    serialNumber: "",
    title: "",
    type: "",
    orderId: "",
    isNew: false,
  };
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

.add-prod__footer {
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
