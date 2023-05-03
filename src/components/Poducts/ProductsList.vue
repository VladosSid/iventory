<template>
  <div class="add-orders">
    <b>Продукты / {{ data.products.length }}</b>
    <form
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
      "
    >
      <label
        for="prodName"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        "
      >
        Тип:

        <select
          style="width: 200px; padding: 5px"
          name="list-type"
          @input="(e) => selectedType(e)"
        >
          <option value="All">All</option>
          <option value="Monitors">Monitors</option>
          <option value="Phone">Phone</option>
        </select>
      </label>

      <label
        for="prodName"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        "
      >
        Спецификация:

        <select
          style="width: 200px; padding: 5px"
          name="list-type"
          @input="(e) => selectedSpecific(e)"
        >
          <option value="All">All</option>
          <option value="Specification 1">Specification 1</option>
          <option value="Specification 2">Specification 2</option>
        </select>
      </label>
    </form>
  </div>

  <ul style="display: flex; flex-direction: column; gap: 10px">
    <ProductsItem
      v-for="{
        id,
        title,
        serialNumber,
        isNew,
        photo,
        type,
        guarantee,
        price,
        date,
        orderId,
      } in useGeneralStore().filterProductsType"
      :key="id"
      :id="id"
      :serialNumber="serialNumber"
      :photo="photo"
      :isNew="isNew"
      :title="title"
      :type="type"
      :guarantee="guarantee"
      :price="price"
      :orderId="orderId"
      :date="date"
    />
  </ul>
</template>

<script setup>
import { useGeneralStore } from "../../store/generalStore";
// import { useProductsStore } from "../../store/productsStore";
import ProductsItem from "./ProductsItem.vue";

// import ModalWindow from "../Modal/ModalWindow.vue";
// import ModalDeleteOrders from "../Modal/ModalDeleteOrders.vue";

const selectedType = (e) => {
  useGeneralStore().filterTypeProduct = e.target.value;
};

const selectedSpecific = (e) => {
  useGeneralStore().filterSpecificProduct = e.target.value;
};
const data = useGeneralStore();
</script>

<style lang="scss" scoped>
.modal-enter-active {
  animation: modal-in 0.5s;
}
.modal-leave-active {
  animation: modal-in 0.5s reverse;
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
.add-orders {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  margin-bottom: 30px;

  gap: 15px;
}
</style>
