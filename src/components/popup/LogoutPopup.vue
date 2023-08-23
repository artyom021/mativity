<template>
  <OnClickOutside :options="{ ignore: ['.burger', '.user-profile-popup'] }" @trigger="closePopup">
    <Transition name="bounce-popup">
      <div v-show="isShowLogoutPopup" class="logout-popup">
        <div class="logout-popup__title">Logout of your account?</div>
        <div class="logout-popup__btns">
          <div @click="confirmLogout" class="logout-popup__yes">YES</div>
          <div @click="closePopup" class="logout-popup__yes">NO</div>
        </div>
      </div>
    </Transition>
  </OnClickOutside>
</template>

<script lang="ts" setup>
import { OnClickOutside } from "@vueuse/components";
import { defineEmits, defineProps } from "vue";

defineProps({
  isShowLogoutPopup: Boolean,
});

const emit = defineEmits(["cancel", "confirm", "onClosePopup"]);

const closePopup = () => {
  emit("cancel");
};

const confirmLogout = () => {
  emit("confirm");
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.logout-popup {
  display: flex;
  position: absolute;
  top: 170px;
  left: 50%;
  flex-direction: column;
  gap: 20px;
  z-index: 10;
  margin: 0 -200px;
  border: 2px solid $primary-900;
  border-radius: 8px;
  background-color: $grey-4000;
  padding: 50px 50px;
  width: 404px;
  height: 280px;

  &__yes,
  &__no {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-out;
    cursor: pointer;
    margin-top: 30px;
    margin-bottom: 20px;
    border: 2px solid #01ddeb;
    border-radius: 50px;
    background: black;
    padding: 0 10px;
    width: 70%;
    height: 105px;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 3px;
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
    text-align: center;
  }

  &__btns {
    display: flex;
    gap: 28px;
  }
}
</style>
