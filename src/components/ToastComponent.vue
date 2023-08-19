<template>
  <Toast>
    <template #message="{ message }">
      <div class="toast__container">
        <div class="toast__section-container">
          <StyledIcon v-if="message.severity === 'success'" :color="`icon-status-${message.severity}`" icon="Success" />
          <StyledIcon :color="`icon-status-${message.severity}`" icon="Warn" v-else-if="message.severity === 'warn'" />
          <StyledIcon
            :color="`icon-status-${message.severity}`"
            icon="Error"
            v-else-if="message.severity === 'error'"
          />
          <StyledIcon :color="`icon-status-${message.severity}`" icon="Info" v-else-if="message.severity === 'info'" />
          <div class="toast__text">
            <span v-if="message.summary" class="toast__summary">
              {{ message.summary }}
            </span>
            <span :class="{ 'toast__detail--light': !message.summary }" class="toast__detail">
              {{ message.detail }}
            </span>
          </div>
        </div>
        <button v-if="toast.action" @click="toast.action.handler" class="toast__action">
          {{ toast.action.label }}
        </button>
      </div>
    </template>
  </Toast>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { watchEffect } from "vue";

import StyledIcon from "@/components/icons/StyledIcon.vue";
import { useAppStore } from "@/store/app/appStore";

const appStore = useAppStore();

const { toast } = storeToRefs(appStore);

const toastManager = useToast();

watchEffect(() => {
  if (toast.value) {
    toastManager.add(toast.value);
  }
});
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/colorsWpp.scss";
@import "@/scss/variables.scss";
@import "@/scss/topography.scss";
@import "@/scss/colorVariables.scss";
//
//$wpp-grey-900: #343a3f;
//$grey-000: #ffffff;
//$grey-300: #d8dce5;
//$text-color-medium: $grey-300;
//$text-color-light: $grey-000;

.toast {
  &__container {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
  }

  &__section-container {
    display: flex;
    align-items: center;
  }

  &__icon {
    align-self: flex-start;
    margin-top: 2px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: 10px;
  }

  &__summary {
    @include typography-s-strong;
  }

  &__detail {
    @include typography-s-body;
    color: $grey-300;

    &--light {
      color: $grey-000;
    }
  }

  &__action {
    @include typography-s-strong;
    margin-right: 12px;
  }
}
</style>

<style lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/variables.scss";
@import "@/scss/topography.scss";
@import "@/scss/colors.scss";
@import "@/scss/colorsWpp.scss";
@import "@/scss/variables.scss";

.p-toast.p-component .p-toast-message .p-toast-message-content {
  border: 1px solid #01ddeb;
  border-radius: 8px;
  background: #121114;
  color: #ffffff;
}

$grey-900: #2f2d37;

.p-toast {
  z-index: 999;
}

.p-toast-top-right {
  top: $space-medium;
  right: $space-medium;
}

.p-toast.p-component .p-toast-message {
  margin-bottom: $space-smallest;
  border-radius: $border-radius;

  &.p-toast-message-warn,
  &.p-toast-message-info,
  &.p-toast-message-error,
  &.p-toast-message-success {
    border: 0;
    background: $grey-900;
    color: $grey-000;
  }

  .p-toast-message-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $space-small $space-small $space-small $space-medium;
  }

  .p-toast-icon-close {
    border: none !important;
    color: $grey-000 !important;
  }
}
</style>
