<template>
  <li class="order-item">
    <p class="order-item__name">
      {{ title }}
    </p>

    <div class="order-item__quantity order-item__info--positions">
      <p>
        <!-- icom -->
        {{ products.length }}
      </p>

      <span>Продукта</span>
    </div>
    <p class="order-item__date">
      {{ date }}
      <span class="order-item__"> {{ day }} / {{ month }} / {{ year }} </span>
    </p>

    <p class="order-item__sum order-item__info--positions">
      <span>{{ priceCount.USD }}</span>
      {{ priceCount.UAH }}
    </p>
  </li>
</template>

<script setup>
import currentDate from "../../helpers/currentDate";
const { day, month, year } = currentDate();

const props = defineProps({
  title: String,
  date: String,
  products: Array,
});

const priceCount = {
  UAH: 0,
  USD: 0,
};

props.products.map(({ price }) => {
  price.map((price) =>
    price.symbol === "UAH"
      ? (priceCount.UAH += price.value)
      : (priceCount.USD += price.value)
  );
});

console.log(priceCount);

console.log(props.products);
</script>

<style lang="scss" scoped>
.order-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 5px 15px;
  border: 1px solid #c7c7c6;
  border-radius: 5px;

  &:hover,
  &:focus {
    box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
    scale: 101%;
  }

  &__name {
    width: 500px;
    text-decoration: underline;
  }

  &__date {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__info--positions {
    display: flex;
    flex-direction: column;
  }
}
</style>
