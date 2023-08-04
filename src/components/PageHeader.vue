<template>
  <div class="header">
    <div class="header__company">
      <img :src="require(`@/assets/png/eye_logo_small.png`)" alt="Logo" />
      <img :src="require(`@/assets/svg/Mativity.svg`)" alt="Mativity" />
    </div>

    <div class="header__language-selector">
      <div @click="toggleLanguageMenu">
        <img :src="require(`@/assets/svg/flags/${currentLanguage}.svg`)" alt="Country" class="header__country-flag" />
      </div>
    </div>

    <LanguagePopup
      :is-show-language-menu="isShowLanguageMenu"
      :offset-left="offsetLeft"
      @onChangeLanguage="onChangeLanguage"
    />

    <div class="header__links">
      <div v-for="link in HEADER_LINKS" :key="link.name" class="header__link">
        <StyledIcon
          :color="isCurrentRoute(link.name) ? '#08ECEC' : '#646464'"
          :icon="link.name"
          @click="onChangeRoute(link.link)"
          class="icons"
        />
      </div>
    </div>

    <div class="header__profile-actions">
      <div @click="openLoginPopup" class="header__profile-action">LOGIN</div>
      <div @click="openSignupPopup" class="header__profile-action">SIGN UP</div>
    </div>
    <div>
      <SignUpPopup :is-show-signup-popup="isShowSignupPopup" />
      <LoginPopup :is-show-login-popup="isShowLoginPopup" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import StyledIcon from "@/components/customComponents/StyledIcon.vue";
import LanguagePopup from "@/components/popup/LanguagePopup.vue";
import LoginPopup from "@/components/popup/LoginPopup.vue";
import SignUpPopup from "@/components/popup/SignupPopup.vue";
import { HEADER_LINKS } from "@/router/routes";
import { useAppStore } from "@/store/app/appStore";

const router = useRouter();
const route = useRoute();

const appStore = useAppStore();
const { currentLanguage } = storeToRefs(appStore);
const { updateLanguage } = appStore;

const isShowLanguageMenu = ref(false);
const isShowLoginPopup = ref(false);
const isShowSignupPopup = ref(false);

const isCurrentRoute = (routeName: string) => {
  return routeName.toLowerCase() === route.name;
};

const offsetLeft = ref(0);

const toggleLanguageMenu = () => {
  const menu = document.getElementsByClassName("header__language-selector")[0] as HTMLElement;
  offsetLeft.value = menu.getBoundingClientRect().left + window.scrollX;

  isShowLanguageMenu.value = !isShowLanguageMenu.value;
};

const onChangeLanguage = (language: string) => {
  isShowLanguageMenu.value = false;
  updateLanguage(language);
};

const onChangeRoute = (routeLink: string) => {
  router.push({ path: routeLink });
};

const openLoginPopup = () => {
  isShowLoginPopup.value = !isShowLoginPopup.value;
};

const openSignupPopup = () => {
  isShowSignupPopup.value = !isShowSignupPopup.value;
};
</script>

<style lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/variables.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $grey-1000;
  padding: 0 $space-normal;
  height: 100px;

  &__company {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__country-flag {
    width: 30px;
  }

  &__links {
    display: flex;
    justify-content: space-between;
    width: 33%;
  }

  &__link {
    cursor: pointer;
    img path {
      fill: white;
    }
  }

  &__profile-actions {
    display: flex;
    justify-content: space-between;
    gap: 80px;
  }

  &__profile-action {
    fill: white;
    cursor: pointer;
    color: $primary-100;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 2px;
  }
}
</style>
