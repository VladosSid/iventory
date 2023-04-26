<template>
  <div class="order-item-modal">
    <p class="order-item-modal__name">
      {{ title }}
    </p>

    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
      "
    >
      <div class="order-item-modal__quantity order-item-modal__info--positions">
        <p>
          {{ products.length }}
        </p>

        <span style="color: #656564; font-size: 12px">Продукта</span>
      </div>
    </div>

    <p class="order-item-modal__date">
      {{ date }}
      <span style="font-size: 16px; color: #494d55">
        {{ day }} / {{ month }} / {{ year }}
      </span>
    </p>

    <p class="order-item-modal__sum order-item-modal__info--positions">
      {{ price.USD }} &#36;
      <span style="font-size: 16px; color: #494d55">
        {{ price.UAH }}
        <span style="font-size: 12px"> UAH</span></span
      >
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  date: String,
  products: Array,
  price: Object,
  day: String,
  month: String,
  year: String,
});

console.log(props.price);
</script>

<style lang="scss" scoped>
.order-item-modal {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  padding: 5px 15px;
  border: 1px solid #c7c7c6;
  border-radius: 5px;

  &__name {
    width: 500px;

    text-decoration: underline;
    font-size: 20px;

    color: #494d55;
  }

  &__quantity-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;

    border: 1px solid rgba(101, 101, 100, 0.5);
    border-radius: 50%;
  }

  &__quantity {
    font-size: 20px;

    color: #494d55;
  }

  &__date {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #656564;
    font-size: 12px;
  }

  &__sum {
    width: 100px;
    color: #656564;
    font-size: 12px;
  }

  &__info--positions {
    display: flex;
    flex-direction: column;
  }
}
</style>
