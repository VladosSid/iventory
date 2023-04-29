<template>
  <li class="list-prod">
    <div
      :class="{
        isAvailableSmblBg: isNew === true,
        isNotAvailableSmblBg: isNew === false,
      }"
      class="list-prod__indicator"
    ></div>

    <img
      src="../../assets/ImgProd.png"
      alt="Photo product"
      class="list-prod__photo"
    />

    <div class="list-prod__box-name">
      {{ title }}
      <span style="color: rgb(101, 101, 100); font-size: 12px">{{
        serialNumber
      }}</span>
    </div>

    <p
      :class="{
        isAvailableSmbl: isNew === true,
        isNotAvailableSmbl: isNew === false,
      }"
      class="list-prod__status"
    >
      {{ isNew === true ? "Свободен" : "В ремонте" }}
    </p>

    <p class="list-prod__guarantee">
      <span
        style="
          color: #656564;
          font-size: 12px;
          display: inherit;
          gap: 10px;
          align-items: center;
        "
        >c
        <p class="list-prod__guarantee-date">{{ dateStart }}</p>
      </span>

      <span
        style="
          color: #656564;
          font-size: 12px;
          display: inherit;
          gap: 10px;
          align-items: center;
        "
        >по
        <p class="list-prod__guarantee-date">{{ dateEnd }}</p>
      </span>
    </p>

    <p class="list-prod__isnew">
      {{ isNew === true ? "новый" : "Б / У" }}
    </p>

    <p class="list-prod__sum list-prod__info--positions">
      {{ price[0].value }} &#36;
      <span style="font-size: 16px; color: #494d55">
        {{ price[1].value }}
        <span style="font-size: 12px"> UAH</span></span
      >
    </p>

    <p class="list-prod__name-order">
      {{ titelOrder.title }}
    </p>

    <p style="font-size: 14px; color: #494d55">
      {{ dateOrder }}
    </p>
  </li>
</template>

<script setup>
import { useOrdersStore } from "../../store/ordersStore";
import refactorDate from "../../helpers/refactorDate";

const props = defineProps({
  id: String,
  title: String,
  serialNumber: String,
  isNew: Boolean,
  photo: String,
  type: String,
  guarantee: Object,
  price: Array,
  orderId: String,
  date: String,
});

const titelOrder = useOrdersStore().orders.find(
  (order) => order.id === props.orderId
);

const dateStart = refactorDate.refactorDateProd(props.guarantee.start);
const dateEnd = refactorDate.refactorDateProd(props.guarantee.end);
const dateOrder = refactorDate.refactorDateProd(props.date);
</script>

<style lang="scss" scoped>
.isAvailableSmblBg {
  background-color: #cddc39;
}
.isNotAvailableSmblBg {
  background-color: grey;
}

.isAvailableSmbl {
  color: #cddc39;
}
.isNotAvailableSmbl {
  color: grey;
}

.list-prod {
  display: grid;
  align-items: center;
  grid-template-columns: 2% 0.1fr 0.6fr 0.2fr 0.2fr 0.1fr 0.1fr 0.3fr 0.2fr;

  border: 1px solid rgba(101, 101, 100, 0.3);
  border-radius: 5px;

  padding: 10px 15px;

  background: #fff;

  &:hover,
  &:focus {
    box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
    scale: 101%;
  }

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &__indicator {
    width: 8px;
    height: 8px;

    border-radius: 50%;
  }

  &__photo {
    width: 50px;
    height: 50px;
  }

  &__box-name {
    display: grid;
    grid-template-rows: 1fr 1fr;

    font-size: 16px;
    color: #494d55;
  }

  &__guarantee {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-date {
      font-size: 14px;
      color: #494d55;
    }
  }

  &__isnew {
    font-size: 16px;
    color: #494d55;
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

  &__name-order {
    font-size: 16px;

    color: #494d55;
  }
}
</style>
