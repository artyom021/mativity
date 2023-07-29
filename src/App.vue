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
  </div>
</template>

<script lang="ts" setup>
import PageFooter from "@/components/PageFooter.vue";
import PageHeader from "@/components/PageHeader.vue";
</script>

<style lang="scss">
@import "@/scss/colorVariables.scss";

body {
  background-color: $app-background;
  color: $text-base-color;
  font-weight: 400;
  font-family: Sora, sans-serif;
}
</style>
