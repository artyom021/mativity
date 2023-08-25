<template>
  <div class="profile">
    <h1 class="profile__title">Profile</h1>
    <div class="profile__block-container">
      <div class="profile__block"><span class="profile__block-name">Name:</span>{{ user?.name ?? "" }}</div>
      <div class="profile__block"><span class="profile__block-name">Email:</span>{{ user?.email ?? "" }}</div>
      <div class="profile__block">
        <span class="profile__block-name">Password:</span
        ><CircleIcon /><CircleIcon /><CircleIcon /><CircleIcon /><CircleIcon /><CircleIcon />
        <span @click="handleResetPopup" class="profile__reset-password">Reset</span>
      </div>
    </div>
    <ResetPopup :is-show-reset-popup="isShowResetPopup" @onPopupClose="handleResetPopup" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";

import CircleIcon from "@/components/icons/CircleIcon.vue";
import ResetPopup from "@/components/popup/ResetPopup.vue";
import { useUserStore } from "@/store/app/userStore";
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const isShowResetPopup = ref<boolean>(false);

const handleResetPopup = (value: boolean) => {
  isShowResetPopup.value = value;
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__block-container {
    display: flex;
    row-gap: 24px;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    display: flex;
    flex-direction: column;
    margin-bottom: 54px;
    padding-top: 90px;
  }

  &__block {
    border: 2px solid #2a4365;
    border-radius: 8px;
    background-color: #131313;
    padding: 24px 50px;
    width: 100%;
    font-weight: 400;
    font-size: 20px;
  }

  &__block-name {
    padding-right: 20px;
    color: $primary-200;
    font-weight: 600;
    font-size: 20px;
  }

  &__reset-password {
    cursor: pointer;
    margin-left: 100px;
    text-decoration: underline;
  }
}
</style>
