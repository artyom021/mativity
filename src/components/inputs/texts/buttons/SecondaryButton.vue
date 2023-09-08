<template>
  <Button
    :class="{ small, 'fixed-width': fixed, 'fixed-width-medium': fixedMedium }"
    :disabled="disabled"
    class="secondary-btn"
  >
    <slot />
  </Button>
</template>

<script lang="ts" setup>
import Button from "primevue/button";

defineProps({
  small: Boolean,
  disabled: Boolean,
  fixed: Boolean,
  fixedMedium: Boolean,
});
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/colorVariables.scss";
@import "@/scss/topography.scss";

.secondary-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  @include typography-s-strong;
  border: 1px solid $primary-500;
  border-radius: $border-radius;
  background: black;
  padding: $space-smallest 20px;
  width: $button-fixed-width;
  height: $button-height;
  color: $primary-500;
  text-transform: none;

  &:hover {
    border-color: $primary-500 !important;
    background-color: $primary-100 !important;
    color: $primary-500;
  }

  &:active {
    border-color: $primary-500 !important;
    background-color: $primary-200 !important;
    color: $primary-500;
  }

  &.small {
    height: $button-height-small;
  }

  &.fixed-width {
    width: $button-fixed-width;
  }

  &.fixed-width-medium {
    padding: $space-smallest 0;
    width: 200px;
    @include typography-s-strong;
  }
}
</style>
