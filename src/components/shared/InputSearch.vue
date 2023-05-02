<template>
  <input
    type="text"
    placeholder="Поиск"
    v-model="useOrdersStore().searchQuery"
  />
</template>

<script setup>
import { useOrdersStore } from "../../store/ordersStore";

const props = defineProps({
  test: String,
});

console.log(props.test);
</script>

<style lang="scss" scoped></style>
