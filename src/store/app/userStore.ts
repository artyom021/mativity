import { defineStore } from "pinia";
import { ref } from "vue";

import { getBalance } from "@/hooks/user/useGetBalance";
import { MAXTIVITY_TOKEN_KEY, getUserInfo } from "@/hooks/user/useUserRead";

export interface User {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  account_type?: string;
  balance?: string | null;
}

export const useUserStore = defineStore("userStore", () => {
  const apiToken = ref<string | null>(localStorage.getItem(MAXTIVITY_TOKEN_KEY));
  // getUserInfo().then(r => );

  const user = ref<User | null>(null);

  const isUserHaveAccess = ref(true);

  const updateUser = (userData: User | null): void => {
    user.value = userData;
  };

  const updateApiToken = (apiToken: string | null): void => {
    apiToken ? localStorage.setItem(MAXTIVITY_TOKEN_KEY, apiToken) : localStorage.removeItem(MAXTIVITY_TOKEN_KEY);
  };

  const updateUserAccess = (isHaveAccess: boolean) => {
    isUserHaveAccess.value = isHaveAccess;
  };

  const setUserBalance = (userBalance: string) => {
    if (user.value) {
      user.value.balance = userBalance;
    }
  };

  const getUserBalance = () => {
    return user.value?.balance || "0";
  };

  return {
    apiToken,
    isUserHaveAccess,
    user,

    updateUser,
    updateApiToken,
    updateUserAccess,
    setUserBalance,
    getUserBalance,
  };
});
