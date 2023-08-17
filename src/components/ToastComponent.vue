<template>
  <Toast>
    <template #message="{ message }">
      <div class="toast__container">
        <div class="toast__section-container">
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
@import "@/scss/variables.scss";
@import "@/scss/colorVariables.scss";

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
    //@include typography-s-strong;
  }

  &__detail {
    //@include typography-s-body;
    //color: $text-color-medium;

    &--light {
      //color: $text-color-light;
    }
  }

  &__action {
    //@include typography-s-strong;
    margin-right: 12px;
  }
}
</style>

<style lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/variables.scss";

.p-toast {
  //z-index: $z-index-toast;
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
    //background: $grey-900;
    //color: $grey-000;
  }

  .p-toast-message-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $space-small $space-small $space-small $space-medium;
  }

  .p-toast-icon-close {
    border: none !important;
    //color: $grey-000 !important;
  }
}
</style>
