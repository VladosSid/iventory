<template>
  <header class="top-menu">
    <Container class="top-menu__container">
      <Logo class="top-menu__logo" />
      <Date />
    </Container>
  </header>
</template>

<script setup>
import Logo from "./Logo.vue";
import Date from "./Date.vue";
import Container from "../shared/Container.vue";
</script>

<style lang="scss" scoped>
.top-menu {
  width: 100vw;
  height: 80px;
  background: #fff;
  box-shadow: 0px -29px 55px 39px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 0px -29px 55px 39px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0px -29px 55px 39px rgba(0, 0, 0, 0.36);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    height: 100%;
  }

  &__logo {
    width: 150px;
  }
}
</style>
