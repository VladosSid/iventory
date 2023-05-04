<template>
  <section style="padding: 30px 0">
    <Container>
      <ProductsList />
    </Container>
  </section>
</template>

<script setup>
import { onUnmounted } from "vue";

import Container from "../components/shared/Container.vue";
import ProductsList from "../components/Poducts/ProductsList.vue";

import { useGeneralStore } from "../store/generalStore";

onUnmounted(() => {
  useGeneralStore().searchQuery = "";
});
</script>

<style lang="scss" scoped></style>
