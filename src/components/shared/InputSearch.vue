<template>
  <input type="text" placeholder="Поиск" />
</template>

<script setup>
const props = defineProps({
  test: String,
});

console.log(props.test);
</script>

<style lang="scss" scoped></style>
