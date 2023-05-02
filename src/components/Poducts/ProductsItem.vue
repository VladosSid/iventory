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
      <span style="color: rgb(101, 101, 100); font-size: 10px">{{
        serialNumber
      }}</span>
    </div>

    <p
      :class="{
        isAvailableSmbl: isNew === true,
        isNotAvailableSmbl: isNew === false,
      }"
      style="font-size: 14px"
    >
      {{ isNew === true ? "Свободен" : "В ремонте" }}
    </p>

    <p class="list-prod__guarantee">
      <span
        style="
          color: #656564;
          font-size: 10px;
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

    <p class="list-prod__sum" style="display: flex; flex-direction: column">
      {{ price[0].value }} &#36;
      <span style="font-size: 14px; color: #494d55">
        {{ price[1].value }}
        <span style="font-size: 10px"> UAH</span></span
      >
    </p>

    <p class="list-prod__name-order">
      {{ !titelOrder ? "---" : titelOrder.title }}
    </p>

    <p style="font-size: 12px; color: #494d55">
      {{ dateOrder }}
    </p>

    <button
      @click.prevent="
        () => {
          useGeneralStore().showModal = true;
          useGeneralStore().idModalProducts = [
            { id, serialNumber, isNew, photo, title },
          ];
        }
      "
      class="list-prod__delete"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash3-fill list-prod__delete-icon"
        viewBox="0 0 16 16"
      >
        <path
          d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
        />
      </svg>
    </button>
  </li>
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
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
.list-prod {
  display: grid;
  align-items: center;
  grid-template-columns: 2% 0.1fr 0.6fr 0.2fr 0.2fr 0.1fr 0.1fr 0.3fr 0.2fr 0.1fr;

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

    font-size: 14px;
  }

  &__guarantee {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-date {
      font-size: 12px;
      color: #494d55;
    }
  }

  &__isnew {
    font-size: 14px;
    color: #494d55;
  }

  &__sum {
    width: 100px;
    color: #656564;
    font-size: 10px;
  }

  &__name-order {
    font-size: 14px;

    color: #494d55;
  }

  &__delete {
    background: none;
    border: none;
  }

  &__delete-icon {
    fill: #656564;

    &:hover,
    &:focus {
      fill: #494d55;
      scale: 130%;
    }

    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
      scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>
