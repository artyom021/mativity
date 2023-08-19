<template>
  <i>
    <component
      :class="{ [direction]: direction }"
      :is="svg"
      :style="{ fill: preparedColor, width: `${props.size}px`, height: `${props.size}px` }"
    />
  </i>
</template>

<script lang="ts" setup>
import { PropType, computed, defineAsyncComponent } from "vue";

import scssColors from "@/scss/colors.modules.scss";

const defaultIconSize = 20;

const props = defineProps({
  size: {
    // eslint-disable-next-line vue/valid-define-props
    default: defaultIconSize,
    type: [Number, String],
  },
  icon: String,
  color: {
    type: String,
    default: "",
  },
  direction: {
    type: String as PropType<"up" | "down" | "left" | "right">,
    default: "up",
  },
});

const preparedColor = computed(() => {
  return scssColors[props.color] || "currentColor";
});

const svg = computed(() => {
  return defineAsyncComponent(() => import(`@/components/icons/Icon${props.icon}.vue`));
});
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
.up {
  transform: rotate(0);
}

.right {
  transform: rotate(90deg);
}

.down {
  transform: rotate(180deg);
}

.left {
  transform: rotate(270deg);
}
</style>
