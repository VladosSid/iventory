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
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
import { useProductsStore } from "../../store/productsStore";
import ProductsItem from "./ProductsItem.vue";

import ModalWindow from "../Modal/ModalWindow.vue";
import ModalDeleteOrders from "../Modal/ModalDeleteOrders.vue";

const data = useProductsStore();
</script>

<style lang="scss" scoped>
.add-orders {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  margin-bottom: 30px;

  gap: 15px;
}
</style>
