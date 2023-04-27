<template>
  <div v-if="show" class="modal-shadow" @click.self="close">
    <div class="modal">
      <div class="modal-container">
        <div class="modal-container__close" @click="close">&#10006;</div>

        <h3 class="modal-container__title">
          <slot name="title"></slot>
        </h3>
        <slot name="body"> </slot>
      </div>
      <div class="modal-container__footer">
        <button class="modal-container__footer__button-cancel" @click="close">
          Отмена
        </button>
        <button class="modal-container__footer__button" @click="close">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";

const show = useGeneralStore().showModal;

const close = () => {
  useGeneralStore().showModal = false;
  useGeneralStore().idModalOrdersId = null;
};
</script>

<style scoped lang="scss">
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}

.modal {
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-container {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;

  &__close {
    position: absolute;
    top: -15px;
    right: -15px;

    border-radius: 50%;
    color: #000;
    background: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;

    cursor: pointer;

    box-shadow: -10px 15px 42px -22px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -10px 15px 42px -22px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -10px 15px 42px -22px rgba(0, 0, 0, 0.75);
  }

  &__title {
    margin-bottom: 15px;
  }

  &__footer {
    display: flex;
    justify-content: end;
    gap: 15px;
    background: green;
    padding: 15px;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    &__button-cancel {
      background: green;

      color: #fff;
      border: none;
      text-align: center;
      padding: 8px;
      font-size: 17px;
      font-weight: 500;
      min-width: 150px;
      border-radius: 30px;

      &:hover,
      &:focus {
        background: #000;
      }

      transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &__button {
      background: #fff;
      color: red;
      border: none;
      text-align: center;
      padding: 8px;
      font-size: 17px;
      font-weight: 500;
      min-width: 150px;
      border-radius: 30px;

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
  }
}
</style>
