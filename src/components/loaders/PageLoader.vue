<template>
  <div v-if="isLoading" :class="{ 'page-loader_fixed': fixed }" class="page-loader">
    <BaseLoader />
  </div>
</template>

<script lang="ts" setup>
import BaseLoader from "@/components/loaders/BaseLoader.vue";

defineProps({
  isLoading: Boolean,
  isVideoLoader: Boolean,
  fixed: Boolean,
});
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/variables.scss";
.page-loader {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);

  &_fixed {
    position: fixed;
  }
}
</style>
