<template>
  <section style="padding: 30px 0">
    <Container>
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

        <b>Приходы / 3</b>
      </div>

      <OrdersList />
    </Container>
  </section>
</template>

<script setup>
import Container from "../components/shared/Container.vue";
import IconAdd from "../components/icons/IconAdd.vue";
import OrdersList from "../components/Orders/OrdersList.vue";
</script>

<style lang="scss" scoped>
.add-orders {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;

  gap: 15px;
}
</style>
