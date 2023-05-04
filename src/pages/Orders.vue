<template>
  <section style="padding: 30px 0">
    <Container>
      <OrdersList />
    </Container>
  </section>
</template>

<script setup>
import { onUnmounted } from "vue";
import Container from "../components/shared/Container.vue";
import OrdersList from "../components/Orders/OrdersList.vue";

import { useGeneralStore } from "../store/generalStore";

onUnmounted(() => {
  useGeneralStore().searchQuery = "";
  useGeneralStore().filterTypeProduct = "All";
  useGeneralStore().filterSpecificProduct = "All";
});
</script>

<style lang="scss" scoped></style>
