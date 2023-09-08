<template>
  <div class="header">
    <div class="header__container">
      <div class="header__left-container">
        <div class="header__company">
          <img :src="require(`@/assets/png/eye_logo_small.png`)" alt="Logo" />
          <img :src="require(`@/assets/svg/Mativity.svg`)" alt="Mativity" />
        </div>

        <div class="header__language-selector">
          <div @click="toggleLanguageMenu">
            <img
              :src="require(`@/assets/svg/flags/${currentLanguage}.svg`)"
              alt="Country"
              class="header__country-flag"
            />
          </div>
        </div>
      </div>
      <div class="header__right-container">
        <div class="header__user-name"></div>
        <div class="header__logout-btn">LOG OUT</div>
      </div>
    </div>
  </div>
  <img :src="require(`@/assets/png/top_neon.png`)" alt="Neon" class="header__neon-bg" />
  <LanguagePopup
    :is-show-language-menu="isShowLanguageMenu"
    :offset-left="offsetLeft"
    @onChangeLanguage="onChangeLanguage"
  />

  <UserProfileMenu v-if="isUserHaveAccess" />
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import StyledIcon from "@/components/customComponents/StyledIcon.vue";
import BurgerIcon from "@/components/icons/BurgerIcon.vue";
import LanguagePopup from "@/components/popup/LanguagePopup.vue";
import UserProfileMenu from "@/components/popup/UserProfileMenu.vue";
import { ROUTE_MAPPING } from "@/constants/routes";
import { HEADER_LINKS } from "@/router/routes";
import { useAppStore } from "@/store/app/appStore";
import { useUserStore } from "@/store/app/userStore";

const router = useRouter();
const route = useRoute();

const userStore = useUserStore();
const { isUserHaveAccess } = storeToRefs(userStore);
const { getUserBalance } = userStore;

const appStore = useAppStore();
const { currentLanguage, isShowSignupPopup, isShowLoginPopup } = storeToRefs(appStore);
const { updateLanguage, updateLoginPopup, updateSignupPopup } = appStore;

const isShowLanguageMenu = ref(false);

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
</script>

<style lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/variables.scss";

.header {
  &__container {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    background-color: $grey-1000;
    padding: 0 $space-normal;
    height: 100px;
  }

  &__left-container {
    display: flex;
    align-items: center;
    gap: 80px;
  }

  &__company {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__country-flag {
    width: 30px;
  }

  &__neon-bg {
    position: absolute;
    z-index: 1;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1), transparent 100%);
    width: 100%;
  }

  &__logout-btn {
    fill: white;
    cursor: pointer;
    border-bottom: 2px solid black;
    color: $primary-100;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 2px;
  }
}
</style>
