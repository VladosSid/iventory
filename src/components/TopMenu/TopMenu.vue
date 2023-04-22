<template>
  <div class="top-menu">
    <Container>
      <Logo class="top-menu__logo" />
    </Container>
  </div>
</template>

<script setup>
import Logo from "./Logo.vue";
import Container from "../shared/Container.vue";
</script>

<style lang="scss" scoped>
.top-menu {
  width: 100vw;
  height: 80px;
  background: #000;

  &__logo {
    width: 200px;
  }
}
</style>
