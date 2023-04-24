<script setup>
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.vue";
import TopMenu from "./components/TopMenu/TopMenu.vue";
</script>

<template>
  <TopMenu class="header" />

  <main>
    <NavigationMenu class="navigation-menu" />
  </main>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
}

main {
  margin-top: 80px;
}

.navigation-menu {
  width: 170px;
}
</style>
