<template>
  <OnClickOutside @trigger="closePopup">
    <Transition name="bounce">
      <div v-show="isShowSignupPopup" class="signup-popup">
        <InputText v-model="email" placeholder="Email" type="text" />
        <InputText v-model="username" placeholder="Username" type="text" />
        <InputText v-model="password" placeholder="Password" type="text" />

        <Checkbox v-model="confirmation" />
        <div class="signup-popup__warning">
          By clicking log in, or continuing with the other options below, you agree to Terms of Service and have read
          the Privacy Policy
        </div>
        <div class="signup-popup__submit-btn btn-neon">SIGN UP</div>
        <div class="signup-popup__new-to">New to Maxtivity? Sign Up</div>
      </div>
    </Transition>
  </OnClickOutside>
</template>

<script lang="ts" setup>
import { OnClickOutside } from "@vueuse/components";
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";
import { ref } from "vue";

import { useAppStore } from "@/store/app/appStore";
const appStore = useAppStore();
const { updateSignupPopup } = appStore;

defineProps({
  isShowSignupPopup: Boolean,
});

const email = ref<string>();
const password = ref<string>();
const username = ref<string>();
const confirmation = ref<boolean>(false);

const closePopup = () => {
  updateSignupPopup(false);
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
</style>
