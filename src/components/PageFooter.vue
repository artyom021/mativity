<template>
  <div class="footer">
    <div class="footer__links">
      <div v-for="link in FOOTER_LINKS" :key="link.name">
        <span>
          {{ link.name }}
        </span>
      </div>
      <div class="footer__copyright">© 2023 Company LTD. All rights reserved</div>
    </div>
    <div class="footer__icons">
      <div class="footer__logo">
        <div><img :src="require(`@/assets/png/eye_logo_small.png`)" alt="Logo" /></div>
        <div class="footer__icon-mativity"><img :src="require(`@/assets/svg/Mativity.svg`)" alt="Mativity" /></div>
      </div>
      <div class="footer__cards"><img :src="require(`@/assets/png/cards.png`)" alt="Visa/Mastercard" /></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FOOTER_LINKS } from "@/router/routes";
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/variables.scss";
.footer {
  display: flex;
  justify-content: space-between;
  background-color: $grey-3000;
  padding: 0 $space-normal;

  &__icons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  &__logo {
    display: flex;
    align-items: center;
  }

  &__icon-mativity {
    height: 26px;
  }

  &__cards {
    display: flex;
    justify-content: flex-end;
  }

  &__copyright {
    padding-top: 80px;
    color: $grey-6000;
    font-weight: 300;
    font-size: 14px;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 55px;
  }
}
</style>
