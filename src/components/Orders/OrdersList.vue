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

  <!-- <transition name="fade">
    <ModalWindow v-if="generalStore.showModal">
      <template v-slot:body>
        <ModalDeleteOrders
          v-if="
            !useGeneralStore().addModalOrder && !useGeneralStore().addModalProd
          "
        >
          <template v-slot:title>
            Ви уверены, что хотите удалить приход?
          </template>

          <template v-slot:button>Удалить</template>
        </ModalDeleteOrders>
      </template>
    </ModalWindow>
  </transition> -->
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
// import { useOrdersStore } from "../../store/ordersStore";

import ModalWindow from "../Modal/ModalWindow.vue";
import ModalDeleteOrders from "../Modal/ModalDeleteOrders.vue";
import ModalAddOrder from "../Modal/AddOrder.vue";
import AddProductModal from "../Modal/AddProductModal.vue";

import OrdersItem from "./OrdersItem.vue";
import IconAdd from "../icons/IconAdd.vue";
import OrderListProdact from "./OrderListProdact.vue";

const generalStore = useGeneralStore();
</script>

<style lang="scss" scoped>
.fade-enter-active {
  animation: fade-in 0.5s;
}
.fade-leave-active {
  animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

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
