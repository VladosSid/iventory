<template>
  <li
    class="order-item"
    :class="{
      orderIsOpen: useGeneralStore().isOpen === true,
      orderClose: useGeneralStore().isOpen === false,
    }"
  >
    <p
      v-if="!useGeneralStore().isOpen"
      class="order-item__name"
      @click="
        useGeneralStore().isOpen = true;
        useGeneralStore().idOpenOrder = id;
        useGeneralStore().currentOrderOpenId = id;
      "
    >
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
      <span
        class="order-item__quantity-icon"
        @click="
          useGeneralStore().isOpen = true;
          useGeneralStore().idOpenOrder = id;
          useGeneralStore().idOpenOrder = id;
          useGeneralStore().currentOrderOpenId = id;
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="#000"
          class="bi bi-list-ul"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          />
        </svg>
      </span>

      <div
        @click="cunter"
        class="order-item__quantity order-item__info--positions"
      >
        <p>
          {{ lengthProd }}
        </p>

        <span style="color: #656564; font-size: 12px">Продукта</span>
      </div>
    </div>

    <p class="order-item__date">
      {{ date }}
      <span style="font-size: 16px; color: #494d55">
        {{ day }} / {{ month }} / {{ year }}
      </span>
    </p>

    <p
      v-if="!useGeneralStore().isOpen"
      class="order-item__sum order-item__info--positions"
    >
      {{ priceCount.USD }} &#36;
      <span style="font-size: 16px; color: #494d55">
        {{ priceCount.UAH }}
        <span style="font-size: 12px"> UAH</span></span
      >
    </p>

    <button
      v-if="!useGeneralStore().isOpen"
      @click.prevent="
        () => {
          useGeneralStore().showModal = true;
          useGeneralStore().idModalProducts = prodList;
          useGeneralStore().idDeleteOrder = id;
          useGeneralStore().openModalDelete = true;
        }
      "
      class="order-item__delete"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash3-fill order-item__delete-icon"
        viewBox="0 0 16 16"
      >
        <path
          d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
        />
      </svg>
    </button>

    <div
      v-if="useGeneralStore().currentOrderOpenId === id"
      class="order-item__current"
    ></div>
  </li>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useGeneralStore } from "../../store/generalStore";

import currentDate from "../../helpers/currentDate";
import refactorDate from "../../helpers/refactorDate";

import { listProdacts } from "../../helpers/orderListProdacts";

const { day, month, year } = currentDate();

const props = defineProps({
  id: String,
  title: String,
  date: String,
});

let prodList = [];
let lengthProd = ref(0);

watchEffect(() => {
  prodList = listProdacts(props.id);

  lengthProd.value = prodList.length;
});

const priceCount = {
  UAH: 0,
  USD: 0,
};

prodList.map(({ price }) => {
  price.map((price) =>
    price.symbol === "UAH"
      ? (priceCount.UAH += price.value)
      : (priceCount.USD += price.value)
  );
});

const date = refactorDate.refactorDateOrder(props.date);
</script>

<style lang="scss" scoped>
.orderIsOpen {
  grid-template-columns: 1fr 1fr 0.5fr;
}
.orderClose {
  grid-template-columns: 6fr 1fr 2fr 1fr 0.5fr;
}
.order-item {
  position: relative;
  display: grid;

  align-items: center;

  padding: 5px 15px;
  border: 1px solid #c7c7c6;
  border-radius: 5px;

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

    &:hover,
    &:focus {
      background: #adabab;
    }

    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
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

  &__current {
    position: absolute;
    top: 0;
    right: -12px;
    width: 50px;
    height: 100%;

    background: #c7c7c6;

    clip-path: polygon(0 0, 34% 0, 76% 0, 100% 50%, 76% 100%, 36% 100%, 0 100%);
  }

  &__info--positions {
    display: flex;
    flex-direction: column;
  }
}
</style>
