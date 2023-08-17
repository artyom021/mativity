<template>
  <Dropdown :model-value="modelValue" :options="items" class="dropdown-poems" optionLabel="label" />
</template>

<script lang="ts" setup>
import Dropdown from "primevue/dropdown";

const props = defineProps({
  items: Array,
  modelValue: Object,
});
</script>

<style lang="scss">
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
</style>
