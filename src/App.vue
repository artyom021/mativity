<template>
  <div class="app" id="app">
    <PageHeader />
    <router-view v-slot="{ Component }">
      <suspense>
        <div>
          <component :is="Component" :key="$route.path"></component>
        </div>
      </suspense>
    </router-view>
    <PageFooter />
    <div :class="{ 'app-overlay--show ': isShowLoginPopup }" class="app-overlay">
      <SignUpPopup :is-show-signup-popup="isShowSignupPopup" />
      <LoginPopup :is-show-login-popup="isShowLoginPopup" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";

import PageFooter from "@/components/PageFooter.vue";
import PageHeader from "@/components/PageHeader.vue";
import LoginPopup from "@/components/popup/LoginPopup.vue";
import SignUpPopup from "@/components/popup/SignupPopup.vue";
import { useAppStore } from "@/store/app/appStore";

const appStore = useAppStore();
const { isShowLoginPopup, isShowSignupPopup } = storeToRefs(appStore);
</script>
ß

<style lang="scss">
@import "@/scss/colorVariables.scss";
@import "@/scss/reset.scss";
@import "@/scss/sora.scss";
@import "@/scss/bounce.scss";

body {
  background-color: $app-background;
  color: $text-base-color;
  font-weight: 400;
  font-family: Sora, sans-serif;
}

.app-overlay {
  display: none;
  position: fixed;
  top: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
}

.app-overlay--show {
  display: flex;
}
</style>
