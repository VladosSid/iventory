<template>
  <input
    type="text"
    placeholder="Поиск"
    v-model="useGeneralStore().searchQuery"
  />
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";

const props = defineProps({
  test: String,
});

console.log(props.test);
</script>

<style lang="scss" scoped></style>
