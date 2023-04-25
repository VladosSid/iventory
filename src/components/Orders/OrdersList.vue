<template>
  <ul style="display: flex; flex-direction: column; gap: 10px">
    <OrdersItem
      v-for="{ id, title, date, products } in data.orders"
      :key="id"
      :title="title"
      :date="date"
      :products="products"
    />
  </ul>
</template>

<script setup>
import data from "../../front-end-data.json";
import OrdersItem from "./OrdersItem.vue";
</script>
