<template>
  <OnClickOutside @trigger="closePopup">
    <Transition name="bounce-popup">
      <div v-show="isShowResetPopup" class="reset-popup">
        <span>New Password</span>
        <InputText v-model="resetValues.password" placeholder="New Password" type="text" />

        <span>Confirm Password</span>
        <Password v-model="resetValues.password_confirm" :feedback="false" placeholder="Password" />

        <div @click="openResetPopup" class="reset-popup__submit-btn btn-neon">RESET</div>
      </div>
    </Transition>
  </OnClickOutside>
</template>

<script lang="ts" setup>
import { OnClickOutside } from "@vueuse/components";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import { defineEmits, defineProps, ref } from "vue";

import { useUserReset } from "@/hooks/user/useUserResetPass";
import { useAppStore } from "@/store/app/appStore";

const appStore = useAppStore();
const { updateLoginPopup } = appStore;

const props = defineProps({
  isShowResetPopup: Boolean,
});

const resetValues = ref({
  password: "",
  password_confirm: "",
});

const closePopup = async () => {
  // if (props.isShowResetPopup) {
  //   updateLoginPopup(true);
  // }
};

const emit = defineEmits(["cancel", "confirm", "openResetPopup"]);

const openResetPopup = async () => {
  console.log("openReset");
  emit("openResetPopup", true);
  await useUserReset({ ...resetValues.value });
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.reset-popup {
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
  width: 400px;
  height: 500px;

  &__submit-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    align-items: center;
    align-self: center;
    cursor: pointer;
    margin-top: 40px;
    border: 2px solid $primary-400;
    border-radius: 12px;
    background-image: url("~@/assets/png/neon_background.png");
    background-size: cover;
    background-color: #000;
    padding: 0 20px;
    width: 100%;
    height: 80px;
    font-weight: 600;
    font-size: 32px;
    text-align: center;
  }
}

.reset-popup :deep(.p-password-input) {
  width: 100%;
}
</style>
