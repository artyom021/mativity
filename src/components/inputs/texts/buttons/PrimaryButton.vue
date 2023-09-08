<template>
  <Button
    :class="{
      transparent,
      'fixed-width': fixed,
    }"
    :disabled="disabled"
    :style="cssColors"
    class="primary-btn"
  >
    <slot />
  </Button>
</template>

<script lang="ts" setup>
import Button from "primevue/button";

import scssColors from "@/scss/colors.modules.scss";

const props = defineProps({
  small: Boolean,
  fixed: Boolean,
  color: {
    type: String,
    default: "primary",
  },
  disabled: Boolean,
  transparent: Boolean,
  textColor: String,
});

const cssColors = {
  "--main": scssColors[`${props.color}-main`],
  "--dark": scssColors[`${props.color}-dark`],
  "--light": scssColors[`${props.color}-light`],
  "--text": props.textColor
    ? scssColors[props.textColor]
    : props.transparent
    ? scssColors["grey-dark-900"]
    : scssColors["grey-light-300"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/colorVariables.scss";
@import "@/scss/topography.scss";

.primary-btn {
  border-radius: $border-radius;
  background-color: var(--main);
  padding: $space-small $space-normal;
  height: $button-height;
  color: var(--text);
  text-transform: none;
  @include typography-s-strong;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--light) !important;
  }

  &:active {
    background-color: var(--dark) !important;
  }

  &.small {
    height: $button-height-small;
  }

  &.fixed-width {
    width: $button-fixed-width;
  }

  &.transparent {
    @include typography-s-strong;
    background: none !important;
    line-height: normal !important;

    &:hover,
    &:active {
      color: var(--text);
    }
  }
}
</style>
