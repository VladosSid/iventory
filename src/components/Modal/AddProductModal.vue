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
        v-model="useProductsStore().newProduct.title"
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
        v-model="useProductsStore().newProduct.serialNumber"
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
        @input="useProductsStore().newProduct.isNew = false"
      />

      <label for="isNew"> New </label>
      <input
        type="radio"
        name="isNew"
        id="isNew"
        value="true"
        @input="useProductsStore().newProduct.isNew = true"
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

  <p></p>
</template>

<script setup>
import { onUnmounted } from "vue";

import { useProductsStore } from "../../store/productsStore";

const selected = (e) => {
  useProductsStore().newProduct.type = e.target.value;
};

onUnmounted(() => {
  useProductsStore().newProduct = {
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
</style>
