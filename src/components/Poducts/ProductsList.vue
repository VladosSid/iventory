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
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
import { useProductsStore } from "../../store/productsStore";
import ProductsItem from "./ProductsItem.vue";
import IconAdd from "../icons/IconAdd.vue";

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
