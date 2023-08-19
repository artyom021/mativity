<template>
  <div class="app" id="app">
    <PageHeader />
    <ToastComponent />
    <router-view v-slot="{ Component }">
      <Transition mode="out-in" name="fade">
        <suspense>
          <component :is="Component"></component>
        </suspense>
      </Transition>
    </router-view>
    <div>
      <PageFooter />
      <div :class="{ 'app-overlay--show ': isShowLoginPopup | isShowSignupPopup }" class="app-overlay">
        <LoginPopup :is-show-login-popup="isShowLoginPopup" />
        <SignUpPopup :is-show-signup-popup="isShowSignupPopup" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";

import PageFooter from "@/components/PageFooter.vue";
import PageHeader from "@/components/PageHeader.vue";
import LoginPopup from "@/components/popup/LoginPopup.vue";
import SignUpPopup from "@/components/popup/SignupPopup.vue";
import ToastComponent from "@/components/ToastComponent.vue";
import { getToken } from "@/hooks/user/useUserRead";
import { useAppStore } from "@/store/app/appStore";

document.title = "Maxtivity";

onBeforeMount(async () => {
  // await getToken();
});

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
  position: fixed;
  top: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
}

.app-overlay--show {
  visibility: visible;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.btn-neon:hover {
  transition: all 0.2s ease-in-out;
  box-shadow: $primary-300 0px 0px 22px;
  border: 3px solid $primary-300;
  padding-left: 2px;
}

.p-inputtext:enabled:focus {
  box-shadow: 0 0 0 0.2rem $primary-300 !important;
  border-color: $primary-400 !important;
}

.p-panelmenu .p-panelmenu-panel:last-child .p-panelmenu-header:not(.p-highlight) .p-panelmenu-header-content {
  background: rgb(0, 47, 111) !important;
  background: linear-gradient(
    106deg,
    rgba(0, 47, 111, 1) 0%,
    rgba(13, 129, 136, 1) 49%,
    rgba(0, 47, 111, 1) 100%
  ) !important;
}

.p-panelmenu .p-panelmenu-header:not(.p-disabled).p-highlight .p-panelmenu-header-content {
  background: rgb(0, 47, 111) !important;
  background: linear-gradient(
    106deg,
    rgba(0, 47, 111, 1) 0%,
    rgba(13, 129, 136, 1) 49%,
    rgba(0, 47, 111, 1) 100%
  ) !important;
}

.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action {
  color: white !important;
}

.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action {
  justify-content: space-between;
}

.p-panelmenu .p-panelmenu-header:not(.p-disabled):focus .p-panelmenu-header-content {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: inset 0 0 0 0.2rem $primary-200 !important;
}

.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link {
  justify-content: space-between;
}

.p-panelmenu .p-panelmenu-content .p-panelmenu-root-list {
  background: black !important;
}

.p-panelmenu .p-panelmenu-content {
  background: black !important;
}

.p-panelmenu
  .p-panelmenu-content
  .p-menuitem:not(.p-highlight):not(.p-disabled)
  > .p-menuitem-content:hover
  .p-menuitem-link
  .p-menuitem-text {
  color: white !important;
}

.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
  background: black !important;
  color: white !important;
}

.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content:hover {
  color: $primary-200 !important;
}

.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
  background-color: black !important;
}

.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: white !important;
}

.p-panelmenu
  .p-panelmenu-content
  .p-menuitem:not(.p-highlight):not(.p-disabled)
  > .p-menuitem-content:hover
  .p-menuitem-link
  .p-menuitem-text {
  color: $primary-200 !important;
}

.p-inputtext {
  color: #d8d8d8 !important;
  font-weight: 600 !important;
  font-size: 30px !important;
}

.p-dropdown-panel .p-dropdown-items {
  padding: 0.1rem 0 !important;
}

.p-inputtext {
  color: #000 !important;
}

.p-toast .p-toast-message .p-toast-icon-close:focus {
  box-shadow: unset !important;
}
</style>
