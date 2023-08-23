<template>
  <div :class="{ active: isShowProfileMenu }" @click.stop="handleBurgerMenu" class="burger">
    <span></span>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";

import { useAppStore } from "@/store/app/appStore";

const appStore = useAppStore();
const { isShowProfileMenu } = storeToRefs(appStore);
const { updateProfileMenu } = appStore;

const handleBurgerMenu = () => {
  updateProfileMenu(!isShowProfileMenu.value);
};
</script>

<style lang="scss" scoped>
@import "@/scss/colorVariables.scss";

.burger {
  top: 2rem;
  right: 2rem;
  z-index: 20;
  cursor: pointer;
  width: 32px;
  height: 24px;
}

.burger span {
  display: block;
  transition: background-color 0.3s ease-in-out;
  border-radius: 12px;
  background-color: $icon-color;
  width: 100%;
  height: 4px;
}

.burger span::before,
.burger span::after {
  display: block;
  transition: all 0.3s ease-in-out;
  border-radius: 12px;
  background-color: $icon-color;
  width: 100%;
  height: 4px;
  content: "";
}

.burger span::before {
  transform: translateY(-10px);
}

.burger span::after {
  transform: translateY(10px);
  margin-top: -4px;
}

.burger.active span {
  background-color: transparent;
}

.burger.active span::before {
  transform: rotateZ(45deg) translateY(0);
}

.burger.active span::after {
  transform: rotateZ(-45deg) translateY(0);
}
</style>
