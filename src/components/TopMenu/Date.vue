<template>
  <div v-if="time" class="date">
    <p class="date__todey">{{ time.weekday }}</p>

    <div class="date__container">
      <p class="date__date">{{ `${time.day} ${time.month}, ${time.year}` }}</p>

      <svg
        style="margin-left: 15px; margin-right: 5px"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="green"
        class="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <IconClock />
      </svg>
      <p class="date__time">
        {{ `${time.hours}:${time.minutes}` }}
      </p>
    </div>
  </div>
</template>

<script setup>
import IconClock from "../icons/IconClock.vue";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";

import currentDate from "../../helpers/currentDate";
const time = ref(null);

let timerId = 0;

onBeforeMount(() => {
  timerId = setInterval(() => {
    time.value = currentDate();
  }, 1000);
});

onBeforeUnmount(() => {
  window.clearInterval(timerId);
});
</script>

<style lang="scss" scoped>
.date__container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.date__container-align {
  display: flex;
  align-items: center;
}
</style>
