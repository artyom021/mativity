<template>
  <i>
    <component :class="{ [direction]: direction }" :is="svg" :style="{ fill: preparedColor }" />
  </i>
</template>

<script lang="ts" setup>
import { PropType, computed, defineAsyncComponent } from "vue";

const props = defineProps({
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
  return props.color;
});

const svg = computed(() => {
  return defineAsyncComponent(() => import(`@/components/icons/${props.icon}Icon.vue`));
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
