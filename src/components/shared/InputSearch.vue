<template>
  <input
    type="text"
    placeholder="Поиск"
    v-model="useGeneralStore().searchQuery"
  />
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
</script>

<style lang="scss" scoped></style>
