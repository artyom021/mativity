<template>
  <Dropdown :model-value="modelValue" :options="items" optionLabel="label" panelClass="dropdown-poems" />
</template>

<script lang="ts" setup>
import Dropdown from "primevue/dropdown";

const props = defineProps({
  items: Array,
  modelValue: Object,
});
</script>

<style lang="scss">
@import "@/scss/colors.scss";

.dropdown-poems.p-dropdown {
  border: unset;
  background: linear-gradient(106deg, rgb(0, 47, 111) 0%, rgb(13, 129, 136) 49%, rgb(0, 47, 111) 100%) !important;
  width: 50% !important;
}

.dropdown-poems > .p-dropdown-label {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: auto 0 !important;
  padding-left: 20px !important;
  color: white !important;
  text-align: center !important;
}

.dropdown-poems .p-dropdown-items-wrapper {
  background-color: black !important;
}

.dropdown-poems .p-dropdown-items .p-dropdown-item {
  color: white !important;
}

.dropdown-poems .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
  background: #00cdcd !important;
}

.dropdown-poems .p-dropdown-items .p-dropdown-item.p-highlight {
  background: #0d8188 !important;
}
</style>
