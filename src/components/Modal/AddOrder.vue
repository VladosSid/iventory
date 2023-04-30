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
        v-model="useOrdersStore().newOrderTitle"
        type="text"
        name="orderName"
        class="input"
        placeholder="order name"
      />
    </label>
  </form>
</template>

<script setup>
import { useOrdersStore } from "../../store/ordersStore";
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
</style>
