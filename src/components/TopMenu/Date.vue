<template>
  <div class="date">
    <p class="date__todey">{{ weekday }}</p>

    <div class="date__container">
      <p class="date__date">{{ `${day} ${month}, ${year}` }}</p>

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
      <p class="date__time">{{ `${hours}:${minutes}` }}</p>
    </div>
  </div>
</template>

<script setup>
import IconClock from "../icons/IconClock.vue";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";

let minutes = ref(0);
let hours = ref(0);
let day = ref("");
let weekday = ref(0);
let month = ref("");
let year = ref("");

let timerId = 0;

const addZero = (value) => (value.length === 1 ? "0" + value : value);

const getWeekDayName = (value) => {
  switch (value) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 0:
      return "Sunday";
    default:
      break;
  }
};

onBeforeMount(() => {
  timerId = setInterval(() => {
    minutes.value = addZero(`${new Date().getMinutes()}`);
    hours.value = addZero(`${new Date().getHours()}`);
    day.value = addZero(`${new Date().getDate()}`);
    month.value = `${new Date()}`.slice(4, 7);
    year.value = `${new Date().getFullYear()}`;
    weekday.value = getWeekDayName(new Date().getDay());
    minutes.value;
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
