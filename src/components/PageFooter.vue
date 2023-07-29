<template>
  <div class="footer">
    <div class="footer__links">
      <div v-for="link in FOOTER_LINKS" :key="link.name">
        <span>
          {{ link.name }}
        </span>
      </div>
    </div>

    <div class="footer__icons">
      <img alt="" class="footer__logo" src="" />
      <img alt="" class="footer__cards-logo" src="" />
    </div>
  </div>

  <div class="footer__copyright">© 2023 Company LTD. All rights reserved</div>
</template>

<script lang="ts" setup>
import { FOOTER_LINKS } from "@/router/routes";
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.footer {
  background-color: $grey-3000;
}
</style>
