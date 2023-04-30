<template>
  <h3 class="delete-order__title">
    <slot name="title"></slot>
  </h3>

  <ul class="list-prod">
    <li
      v-for="{ id, serialNumber, isNew, photo, title } in prod"
      :key="id"
      class="list-prod__item"
    >
      <div
        :class="{
          isAvailableSmbl: isNew === true,
          isNotAvailableSmbl: isNew === false,
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
    </li>
  </ul>
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
const prod = useGeneralStore().idModalProducts;
</script>

<style lang="scss" scoped>
.list-prod {
  .isAvailableSmbl {
    background-color: #cddc39;
  }
  .isNotAvailableSmbl {
    background-color: grey;
  }

  .delete-order__title {
    padding-left: 15px;
    padding-right: 15px;

    margin-bottom: 15px;
  }

  &__item {
    border-top: 1px solid rgba(101, 101, 100, 0.3);
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr 8fr;

    padding-left: 15px;
    padding-right: 15px;

    &:hover,
    &:focus {
      box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 30px -10px rgba(0, 0, 0, 0.75);
      scale: 101%;
    }

    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
      scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__indicator {
    width: 8px;
    height: 8px;
    background: #000;

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
}
</style>
