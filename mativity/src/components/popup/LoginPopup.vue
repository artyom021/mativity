<template>
  <OnClickOutside @trigger="closePopup">
    <Transition name="bounce-popup">
      <div v-show="isShowLoginPopup" class="login-popup">
        <InputText v-model="email" placeholder="Email" type="text" />
        <InputText v-model="password" placeholder="Password" type="text" />

        <div class="login-popup__warning">
          By clicking log in, or continuing with the other options below, you agree to Terms of Service and have read
          the Privacy Policy
        </div>

        <div class="login-popup__submit-btn btn-neon">LOG IN</div>
        <div class="login-popup__forgot-password">Forgot you password?</div>
        <div class="login-popup__new-to">New to Maxtivity? Sign Up</div>
      </div>
    </Transition>
  </OnClickOutside>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app/appStore";
import { OnClickOutside } from "@vueuse/components";
import InputText from "primevue/inputtext";
import { defineEmits, defineProps, ref } from "vue";

const appStore = useAppStore();
const { updateLoginPopup } = appStore;

const props = defineProps({
  isShowLoginPopup: Boolean,
});

const closePopup = () => {
  if (props.isShowLoginPopup) {
    updateLoginPopup(false);
  }
};

const email = ref<string>();
const password = ref<string>();

defineEmits(["cancel", "confirm", "onClosePopup"]);

const showPopup = ref<boolean>(false);
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

    align-items: center;
    cursor: pointer;
    margin-bottom: 40px;
    border: 2px solid $primary-400;
    border-radius: 12px;
    border-radius: 12px;
    background-image: url("~@/assets/png/neon_background.png");
    background-size: cover;
    background-color: #000;
    padding: 0 20px;
    width: 30%;
    height: 80px;
    height: 350px;
    font-weight: 600;
    font-size: 32px;
    text-align: center;
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
