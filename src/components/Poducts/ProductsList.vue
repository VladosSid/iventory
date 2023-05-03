<template>
  <div class="add-orders">
    <b>Продукты / {{ data.products.length }}</b>
  </div>

  <ul style="display: flex; flex-direction: column; gap: 10px">
    <ProductsItem
      v-for="{
        id,
        title,
        serialNumber,
        isNew,
        photo,
        type,
        guarantee,
        price,
        date,
        orderId,
      } in data.products"
      :key="id"
      :id="id"
      :serialNumber="serialNumber"
      :photo="photo"
      :isNew="isNew"
      :title="title"
      :type="type"
      :guarantee="guarantee"
      :price="price"
      :orderId="orderId"
      :date="date"
    />
  </ul>

  <!-- <transition name="modal">
    <ModalWindow v-if="useGeneralStore().showModal">
      <template v-slot:body>
        <ModalDeleteOrders>
          <template v-slot:title
            >Ви уверены, что хотите удалить продукт?</template
          >

          <template v-slot:button>Удалить</template>
        </ModalDeleteOrders>
      </template>
    </ModalWindow>
  </transition> -->
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
// import { useProductsStore } from "../../store/productsStore";
import ProductsItem from "./ProductsItem.vue";

import ModalWindow from "../Modal/ModalWindow.vue";
import ModalDeleteOrders from "../Modal/ModalDeleteOrders.vue";

const data = useGeneralStore();
</script>

<style lang="scss" scoped>
.modal-enter-active {
  animation: modal-in 0.5s;
}
.modal-leave-active {
  animation: modal-in 0.5s reverse;
}
@keyframes modal-in {
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
.add-orders {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  margin-bottom: 30px;

  gap: 15px;
}
</style>
