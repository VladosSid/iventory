<template>
  <div class="add-orders">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#689e30"
      class="bi bi-plus-circle-fill"
      viewBox="0 0 16 16"
    >
      <IconAdd />
    </svg>

    <b>Приходы / {{ data.orders.length }}</b>
  </div>

  <div
    :class="{
      gridContainer: useOrdersStore().isOpen === true,
    }"
  >
    <ul style="display: flex; flex-direction: column; gap: 10px">
      <OrdersItem
        v-for="{ id, title, date, productsId } in data.orders"
        :key="id"
        :id="id"
        :title="title"
        :date="date"
      />
    </ul>

    <OrderListProdact v-if="useOrdersStore().isOpen" />
  </div>

  <ModalWindow v-if="generalStore.showModal">
    <template v-slot:title>Ви уверены, что хотите удалить приход?</template>
    <template v-slot:body>
      <ModalDeleteOrders />
    </template>
  </ModalWindow>
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
import { useOrdersStore } from "../../store/ordersStore";

import ModalDeleteOrders from "../Modal/ModalDeleteOrders.vue";
import ModalWindow from "../Modal/ModalWindow.vue";

import OrdersItem from "./OrdersItem.vue";
import IconAdd from "../icons/IconAdd.vue";
import OrderListProdact from "./OrderListProdact.vue";

const generalStore = useGeneralStore();
const data = useOrdersStore();
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
}
</style>
