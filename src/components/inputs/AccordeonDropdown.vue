<template>
  <Dropdown
    v-model="selectedCountry"
    :options="items"
    :placeholder="placeholder"
    class="accordeon-dropdown"
    optionLabel="name"
    panel-class="accordeon-dropdown-panel"
    scrollHeight="400px"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex align-items-center">
        <div>{{ slotProps.value.label }}</div>
      </div>
    </template>
    <template #option="slotProps">
      <div class="dropdown-item flex align-items-center">
        <div>{{ slotProps.option.label }}</div>
      </div>
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import Dropdown from "primevue/dropdown";
import { ref } from "vue";
const selectedCountry = ref();

const props = defineProps({
  items: Array,
  placeholder: String,
});
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.accordeon-dropdown {
  border-radius: 8px;
  width: 30%;
  height: 70px;
}

.accordeon-dropdown :deep(.p-inputtext) {
  display: flex !important;
  justify-content: center;
  align-items: center !important;
  color: #d8d8d8 !important;
  font-weight: 600 !important;
  font-size: 24px !important;
  letter-spacing: 2px;
}

.accordeon-dropdown.p-dropdown {
  border: unset;
  background-color: #0d8188 !important;
}

.accordeon-dropdown-panel.p-dropdown-items-wrapper {
  background-color: #0d8188 !important;
}

.accordeon-dropdown :deep(.p-dropdown-trigger-icon) {
  color: white !important;
}

.accordeon-dropdown.p-dropdown:not(.p-disabled):hover {
  border-color: $primary-100 !important;
}

.accordeon-dropdown.p-dropdown:not(.p-disabled).p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0rem $primary-200 !important;
  border-color: $primary-100 !important;
}
</style>

<style lang="scss">
.accordeon-dropdown-panel {
  transform: translateY(-8px) !important;
  background-color: #0d8188 !important;
}

.accordeon-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: unset;
}

.accordeon-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
  background-color: unset;
}

.accordeon-dropdown-panel .p-dropdown-item .dropdown-item {
  border-radius: 8px !important;
  background: black !important;
  padding: 12px 40px !important;
  color: white !important;
  text-align: center;
}

.accordeon-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: unset !important;
}
.accordeon-dropdown-panel .p-dropdown-item.p-highlight {
  background-color: unset !important;
}
.accordeon-dropdown-panel .p-dropdown-items .p-dropdown-item:first-of-type {
  background-color: unset !important;
}
</style>
