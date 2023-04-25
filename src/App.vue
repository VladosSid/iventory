<script setup>
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.vue";
import TopMenu from "./components/TopMenu/TopMenu.vue";
</script>

<template>
  <TopMenu class="header" />

  <div class="container-position">
    <NavigationMenu class="navigation-menu" />

    <main>
      <router-view class="container-position__page-view"></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
}

.container-position {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 80px;

  &__page-view {
    margin-left: 200px;
  }
}

.navigation-menu {
  width: 170px;
}
</style>
