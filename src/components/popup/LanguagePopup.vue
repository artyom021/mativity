<template>
  <Transition name="bounce">
    <div v-show="isShowLanguageMenu" :style="{ left: `${offsetLeft - 200}px` }" class="language-popup">
      <div v-for="language in languages" :key="language.label" class="language-popup__language">
        <div @click="onChangeLanguage(language.label)" class="">
          <img
            :src="require(`@/assets/svg/flags/${LanguagesEnum[language.label]}.svg`)"
            alt=""
            class="language-popup__language-flag"
          />
          <span class="language-popup__language-title">{{ language.label.toUpperCase() }}</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { LanguagesEnum, languages } from "@/settings/languages";

defineProps({
  isShowLanguageMenu: Boolean,
  offsetLeft: Number,
});

const emit = defineEmits(["onChangeLanguage"]);

const onChangeLanguage = (language: string) => {
  emit("onChangeLanguage", language.toLowerCase());
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.language-popup {
  display: flex;
  position: absolute;
  top: 100px;
  flex-direction: column;
  gap: 20px;
  z-index: 999;
  border: 2px solid $primary-900;
  border-radius: 8px;
  background-color: $grey-4000;
  padding: 10px;
  width: 228px;
  height: 310px;

  &__language {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border-radius: 8px;
    background-color: $grey-5000;
    height: 34px;
  }

  &__language-title {
    padding-left: 16px;
  }

  &__language-flag {
    padding-left: 8px;
  }
}
</style>
