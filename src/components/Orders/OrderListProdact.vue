<template>
  <div class="order-prod">
    <div class="order-prod__box-title">
      <h2 class="order-prod__title">{{ carentOrder.title }}</h2>

      <div
        class="order-prod__add-prod"
        @click="
          useGeneralStore().showModal = true;
          useGeneralStore().addModalProd = true;
          useGeneralStore().newProduct.orderId =
            useGeneralStore().orders.idOpenOrder;
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#689e30"
          class="bi bi-plus-circle-fill"
          viewBox="0 0 16 16"
        >
          <IconAdd style="margin-left: 15px" />
        </svg>

        <b>Добавить продукт</b>
      </div>
    </div>

    <ul class="order-prod__list">
      <li
        class="order-prod__item"
        v-for="{ id, title, serialNumber, isNew, photo } in listProdacts(
          useGeneralStore().idOpenOrder
        )"
        :key="id"
      >
        <div
          :class="{
            isAvailableSmblBg: isNew === true,
            isNotAvailableSmblBg: isNew === false,
          }"
          class="order-prod__item-indicator"
        ></div>

        <img
          src="../../assets/ImgProd.png"
          alt="Photo product"
          class="order-prod__item-photo"
        />

        <div class="order-prod__item-box-name">
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

        <button
          @click.prevent="
            () => {
              useGeneralStore().showModal = true;
              useGeneralStore().idModalProducts = [
                { id, serialNumber, isNew, photo, title },
              ];
            }
          "
          class="order-prod__item-delete"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash3-fill order-prod__item-delete-icon"
            viewBox="0 0 16 16"
          >
            <path
              d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
            />
          </svg>
        </button>
      </li>
    </ul>

    <div
      class="order-prod__close"
      @click="
        useGeneralStore().isOpen = false;
        useGeneralStore().idOpenOrder = null;
        useGeneralStore().currentOrderOpenId = null;
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
// import { useOrdersStore } from "../../store/ordersStore";
// import { useProductsStore } from "../../store/productsStore";
import { useGeneralStore } from "../../store/generalStore";

import { listProdacts } from "../../helpers/orderListProdacts";

// const order = useOrdersStore();

import IconAdd from "../icons/IconAdd.vue";

const carentOrder = useGeneralStore().orders.find(
  (order) => order.id === useGeneralStore().idOpenOrder
);
</script>

<style lang="scss" scoped>
.order-prod {
  position: relative;
  border: 1px solid #c7c7c6;
  border-radius: 5px;

  background: #fff;

  &__box-title {
    margin: 15px;
  }

  &__title {
    margin-bottom: 15px;
  }

  &__add-prod {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: green;

    gap: 15px;

    &:hover > svg,
    &:focus > svg {
      scale: 1.3;
    }

    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__item {
    display: grid;
    align-items: center;
    grid-template-columns: 2% 1fr 5fr 2fr 0.5fr;

    border-top: 1px solid rgba(101, 101, 100, 0.3);

    padding: 10px 15px;

    &:hover,
    &:focus {
      box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
      scale: 101%;
    }

    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
      scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &-indicator {
      width: 8px;
      height: 8px;

      border-radius: 50%;
    }

    &-photo {
      width: 50px;
      height: 50px;
    }

    &-box-name {
      display: grid;
      grid-template-rows: 1fr 1fr;

      font-size: 14px;
      color: #494d55;
    }

    &-delete {
      background: none;
      border: none;
    }

    &-delete-icon {
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

  &__close {
    width: 30px;
    height: 30px;
    background: #fafafa;
    color: #000;
    position: absolute;
    top: -15px;
    right: -15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);

    &:hover,
    &:focus {
      box-shadow: none;
      scale: 0.8;
    }

    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) scale 250ms
      cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>
