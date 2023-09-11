<template>
  <div class="app" id="app">
    <PageHeader v-if="!isAdminRoute" />
    <AdminPageHeader v-if="isAdminRoute" />

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
    <PageLoader :is-loading="isLoading" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

import AdminPageHeader from "@/components/AdminPageHeader.vue";
import PageLoader from "@/components/loaders/PageLoader.vue";
import PageFooter from "@/components/PageFooter.vue";
import PageHeader from "@/components/PageHeader.vue";
import LoginPopup from "@/components/popup/LoginPopup.vue";
import SignUpPopup from "@/components/popup/SignupPopup.vue";
import ToastComponent from "@/components/ToastComponent.vue";
import { ROUTES } from "@/constants/routes";
import { getUserInfo } from "@/hooks/user/useUserRead";
import { useAppStore } from "@/store/app/appStore";

const router = useRoute();

const isAdminRoute = computed<boolean>(() => {
  const path = router.path;
  return path === ROUTES.ADMIN_LOGIN.PATH || path === ROUTES.ADMIN_PANEL.PATH;
});

const appStore = useAppStore();
const { isLoading, isShowLoginPopup, isShowSignupPopup } = storeToRefs(appStore);

document.title = "Maxtivity";

onBeforeMount(async () => {
  await getUserInfo();
});
</script>

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
  z-index: 10;
  transition: all 0.2s ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
}

.app-overlay--show {
  visibility: visible;
}

.p-inputtext:enabled:focus {
  border-color: $primary-200 !important;
}

.btn-disabled {
  opacity: 0.2;
  pointer-events: none;
}

.copy-btn {
  position: absolute !important;
  top: 30px !important;
  cursor: pointer;
}
</style>
