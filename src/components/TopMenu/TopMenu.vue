<template>
  <header class="top-menu">
    <Container class="top-menu__container">
      <div class="top-menu__container-logo">
        <Logo class="top-menu__logo" />

        <InputSearch class="top-menu__input-search" test="123" />
      </div>

      <Date />
    </Container>
  </header>
</template>

<script setup>
import Logo from "./Logo.vue";
import Date from "./Date.vue";
import Container from "../shared/Container.vue";
import InputSearch from "../shared/InputSearch.vue";
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

  &__container-logo {
    display: flex;
    align-items: center;
    gap: 100px;
  }

  &__logo {
    width: 150px;
  }

  &__input-search {
    width: 300px;
    padding: 5px 10px;

    font-weight: 700;

    color: #000;
    background: #c7c7c6;

    border: none;
    border-radius: 4px;

    outline: none;

    box-shadow: 0px 23px 6px -21px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 0px 23px 6px -21px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 0px 23px 6px -21px rgba(0, 0, 0, 0.75) inset;
  }
}
</style>
