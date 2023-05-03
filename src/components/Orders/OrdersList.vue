<template>
  <div class="add-orders">
    <svg
      @click="
        useGeneralStore().showModal = true;
        useGeneralStore().addModalOrder = true;
      "
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#689e30"
      class="bi bi-plus-circle-fill add-orders__button"
      viewBox="0 0 16 16"
    >
      <IconAdd />
    </svg>

    <b>Приходы / {{ generalStore.orders.length }}</b>
  </div>

  <div
    :class="{
      gridContainer: useGeneralStore().isOpen === true,
    }"
  >
    <ul style="display: flex; flex-direction: column; gap: 10px">
      <OrdersItem
        v-if="useGeneralStore().filterOrders.length !== 0"
        v-for="{ id, title, date } in useGeneralStore().filterOrders"
        :key="id"
        :id="id"
        :title="title"
        :date="date"
      />

      <b v-else>Ничего не найдено</b>
    </ul>

    <OrderListProdact v-if="useGeneralStore().isOpen" />
  </div>
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
// import { useOrdersStore } from "../../store/ordersStore";

import OrdersItem from "./OrdersItem.vue";
import IconAdd from "../icons/IconAdd.vue";
import OrderListProdact from "./OrderListProdact.vue";

const generalStore = useGeneralStore();
</script>

<style lang="scss" scoped>
.gridContainer {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 15px;
}
.add-orders {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  margin-bottom: 30px;

  gap: 15px;

  &__button:hover,
  &__button:focus {
    scale: 1.1;
  }
}
</style>
