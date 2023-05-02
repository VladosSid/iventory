<template>
  <div class="nav-menu">
    <UserLogo />

    <ul class="nav-menu__list">
      <li class="nav-menu__item current">
        <router-link class="nav-menu__link" to="/orders">приход</router-link>
      </li>

      <li class="nav-menu__item">
        <router-link class="nav-menu__link" to="/products">группы</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import UserLogo from "./UserLogo.vue";
</script>

<style lang="scss" scoped>
.nav-menu {
  flex: 1;
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  height: 100%;
  padding: 50px 15px;

  box-shadow: 13px 0px 22px -13px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 13px 0px 22px -13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 13px 0px 22px -13px rgba(0, 0, 0, 0.75);
  &__list {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  &__link {
    text-transform: uppercase;
    color: #000;

    &.router-link-exact-active::after {
      content: "";
      height: 2px;
      background: #689e30;
      width: 100%;
      display: block;
    }
  }
}
</style>
