import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";

import { ROUTES } from "@/constants/routes";
import { MAXTIVITY_TOKEN_KEY } from "@/hooks/user/useUserRead";
import router from "@/router";

export interface User {
  email: string;
  familyName: string;
  givenName: string;
  name: string;
  picture: string;
}

export const useUserStore = defineStore("userStore", () => {
  const token = localStorage.getItem(MAXTIVITY_TOKEN_KEY);

  const isUserHaveAccess = ref(true);
  //
  // const user = ref<User | null>(
  //   userData
  //     ? {
  //         email: userData?.email,
  //         familyName: userData?.family_name,
  //         givenName: userData?.given_name,
  //         name: userData?.name,
  //         picture: userData?.picture,
  //       }
  //     : null
  // );
  const apiToken = ref<string | null>(token ? token : null);

  const updateUser = (userData: User | null): void => {
    // user.value = userData;
  };

  const updateApiToken = (token: string | null): void => {
    token ? localStorage.setItem(MAXTIVITY_TOKEN_KEY, token) : localStorage.removeItem(MAXTIVITY_TOKEN_KEY);
    apiToken.value = token;
  };

  const updateUserAccess = (isHaveAccess: boolean) => {
    isUserHaveAccess.value = isHaveAccess;
  };

  return {
    apiToken,
    isUserHaveAccess,

    updateUser,
    updateApiToken,
    updateUserAccess,
  };
});
