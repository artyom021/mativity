<template>
  <OnClickOutside @trigger="closePopup">
    <Transition name="bounce">
      <div v-show="isShowSignupPopup" class="signup-popup">
        <InputText v-model="formValues.email" placeholder="Email" type="text" />
        <InputText v-model="formValues.name" placeholder="Username" type="text" />
        <Password v-model="formValues.password" :feedback="false" placeholder="Password" />

        <div class="signup-popup__warning-container">
          <Checkbox v-model="confirmation" binary />
          <div class="signup-popup__warning">{{ $lang.message.signUpWarning }}</div>
        </div>

        <div @click="signUp" class="signup-popup__submit-btn btn-neon">SIGN UP</div>
        <div class="signup-popup__new-to">New to Maxtivity? Sign Up</div>
      </div>
    </Transition>
  </OnClickOutside>
</template>

<script lang="ts" setup>
import { OnClickOutside } from "@vueuse/components";
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
// import { useForm } from "vee-validate";
import { ref } from "vue";

import { UserCreate, useUserCreate } from "@/hooks/user/useUserCreate";
import { useAppStore } from "@/store/app/appStore";

const appStore = useAppStore();
const { updateSignupPopup } = appStore;

defineProps({
  isShowSignupPopup: Boolean,
});

const confirmation = ref<boolean>(false);

// function defineInputBinds(email1: string) {}

// const email = defineInputBinds("email");

const formValues = ref<UserCreate>({
  email: "",
  name: "",
  password: "",
  password_confirm: "",
});

const closePopup = () => {
  updateSignupPopup(false);
};

const signUp = async () => {
  closePopup();
  await useUserCreate({ ...formValues.value, password_confirm: formValues.value.password });
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.signup-popup {
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

  &__warning-container {
    display: flex;
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

.signup-popup :deep(.p-password-input) {
  width: 100%;
}
</style>
