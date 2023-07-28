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

</script>

<style lang="scss">

</style>
