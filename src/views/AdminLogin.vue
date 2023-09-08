<template>
  <div class="admin-login">
    <div class="admin-login__header">
      <div class="admin-login__header-container">
        <img :src="require(`@/assets/png/eye_logo_small.png`)" alt="Logo" />
        <img :src="require(`@/assets/svg/Mativity.svg`)" alt="Mativity" />
      </div>
    </div>

    <div class="admin-login__form">
      <InputText v-model="loginValues.email" classs="admin-login__form-input" placeholder="Email" type="text" />
      <Password
        v-model="loginValues.password"
        :feedback="false"
        classs="admin-login__form-input password"
        placeholder="Password"
      />
      <div @click="login" class="admin-login__login-btn btn-neon">LOG IN</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import { ref } from "vue";
import { useRouter } from "vue-router";

import { ROUTES } from "@/constants/routes";
import { UserLogin, useUserLogin } from "@/hooks/user/useUserLogin";

const router = useRouter();

const loginValues = ref<UserLogin>({
  email: "",
  password: "",
});

const login = async () => {
  const res = await useUserLogin(loginValues.value);
  if (res) {
    await router.push({ path: ROUTES.ADMIN_PANEL.PATH });
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.admin-login {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    margin-top: 120px;
    text-align: center;
  }

  &__header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 42px;
    border: 1px solid $primary-900;
    border-radius: 16px;
    padding: 42px 60px;
    width: 32%;
  }

  &__login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 42px;
    border: 2px solid $primary-400;
    border-radius: 12px;
    height: 80px;
    font-weight: 600;
    font-size: 32px;
  }

  &__form-input {
    width: 80%;
  }
}
</style>

<style lang="scss">
.admin-login .p-password-input {
  width: 100% !important;
}
</style>
