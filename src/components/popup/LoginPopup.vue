<template>
  <OnClickOutside @trigger="closePopup">
    <Transition name="bounce-popup">
      <div v-show="isShowLoginPopup" class="login-popup">
        <InputText v-model="loginValues.email" placeholder="Email" type="text" />
        <Password v-model="loginValues.password" :feedback="false" placeholder="Password" />

        <div class="login-popup__warning">
          By clicking log in, or continuing with the other options below, you agree to Terms of Service and have read
          the Privacy Policy
        </div>

        <div @click="login" class="login-popup__submit-btn btn-neon">LOG IN</div>
        <div class="login-popup__forgot-password">Forgot you password?</div>
        <div class="login-popup__new-to">New to Maxtivity? Sign Up</div>
      </div>
    </Transition>
  </OnClickOutside>
</template>

<script lang="ts" setup>
import { OnClickOutside } from "@vueuse/components";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import { defineEmits, defineProps, ref } from "vue";

import { useUserCreate } from "@/hooks/user/useUserCreate";
import { UserLogin, useUserLogin } from "@/hooks/user/useUserLogin";
import { useAppStore } from "@/store/app/appStore";

const appStore = useAppStore();
const { updateLoginPopup } = appStore;

const props = defineProps({
  isShowLoginPopup: Boolean,
});

const loginValues = ref<UserLogin>({
  email: "",
  password: "",
});

const closePopup = () => {
  if (props.isShowLoginPopup) {
    updateLoginPopup(false);
  }
};

defineEmits(["cancel", "confirm", "onClosePopup"]);

const showPopup = ref<boolean>(false);

const login = async () => {
  closePopup();
  await useUserLogin(loginValues.value);
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.login-popup {
  display: flex;
  position: absolute;
  top: 170px;
  left: 50%;
  flex-direction: column;
  gap: 20px;
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
    cursor: pointer;
    border: 2px solid $primary-400;
    border-radius: 12px;
    height: 80px;
    font-weight: 600;
    font-size: 32px;
  }

  &__warning {
    color: $grey-6000;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }

  &__forgot-password {
    margin: 0 auto;
    padding-top: 30px;
  }

  &__new-to {
    margin: 0 auto;
    text-decoration: underline;
  }
}

.login-popup :deep(.p-password-input) {
  width: 100%;
}
</style>
