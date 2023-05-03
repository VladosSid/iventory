<script setup>
import { useGeneralStore } from "./store/generalStore";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.vue";
import TopMenu from "./components/TopMenu/TopMenu.vue";

import ModalWindow from "./components/Modal/ModalWindow.vue";
import ModalDeleteOrders from "./components/Modal/ModalDeleteOrders.vue";
import ModalAddOrder from "./components/Modal/AddOrder.vue";
import AddProductModal from "./components/Modal/AddProductModal.vue";
</script>

<template>
  <TopMenu class="header" />

  <div class="container-position">
    <NavigationMenu class="navigation-menu" />

    <main>
      <router-view v-slot="{ Component }" class="container-position__page-view">
        <transition name="page">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>

  <transition name="modal">
    <ModalWindow v-if="useGeneralStore().showModal">
      <template v-slot:body>
        <ModalDeleteOrders v-if="useGeneralStore().openModalDelete">
          <template v-slot:title
            >Ви уверены, что хотите удалить продукт?</template
          >

          <template v-slot:button>Удалить</template>
        </ModalDeleteOrders>

        <ModalAddOrder v-if="useGeneralStore().addModalOrder">
          <template v-slot:title> Добавить приход </template>
          <template v-slot:button>Добавить</template>
        </ModalAddOrder>

        <AddProductModal v-if="useGeneralStore().addModalProd">
          <template v-slot:title> Добавить продукт </template>
          <template v-slot:button>Добавить</template>
        </AddProductModal>
      </template>
    </ModalWindow>
  </transition>
</template>

<style lang="scss" scoped>
.modal-enter-active {
  animation: modal-in 0.5s;
}
.modal-leave-active {
  animation: modal-in 0s reverse;
}
@keyframes modal-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.page-enter-active {
  animation: page-in 0.5s;
}

@keyframes page-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
.header {
  position: fixed;
}

.container-position {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 80px;

  &__page-view {
    margin-left: 200px;
  }
}

.navigation-menu {
  width: 170px;
}
</style>
