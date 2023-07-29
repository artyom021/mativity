<template>
  <div class="header">
    <div class="card flex justify-content-center">
      <Button @click="onToggleMenu" aria-controls="overlay_menu" aria-haspopup="true" label="Toggle" type="button" />
      <Menu :model="languages" :popup="true" id="overlay_menu" ref="menu" />
    </div>

    <div class="header__links">
      <div v-for="link in HEADER_LINKS" :key="link.name" class="header__link">
        <img :alt="link.name" :src="require(`@/assets/svg/${link.name}.svg`)" />
      </div>
    </div>

    <div class="header__profile-actions">
      <div class="header__profile-action">LOGIN</div>
      <div class="header__profile-action">SIGN UP</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "primevue/button";
import Menu from "primevue/menu";
import { onBeforeMount, ref } from "vue";

import { HEADER_LINKS } from "@/router/routes";
import { languages } from "@/settings/languages";

const menu = ref();

const onToggleMenu = (event: Event) => {
  menu.value.toggle(event);
};

onBeforeMount(() => {
  console.log(languages);
});
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/variables.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $grey-1000;
  padding: 0 $space-normal;
  height: 100px;

  &__links {
    display: flex;
    justify-content: space-between;
    width: 33%;
  }

  &__profile-actions {
    display: flex;
    justify-content: space-between;
    gap: 80px;
  }

  &__profile-action {
    color: $primary-100;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 2px;
  }
}
</style>
