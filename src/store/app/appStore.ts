import { defineStore } from "pinia";
import { ToastMessageOptions } from "primevue/toast";
import { Ref, ref } from "vue";

import { LanguagesEnum } from "@/settings/languages";
export const DEFAULT_TOAST_LIFE_TIME = 5000;

interface ToastConfig extends ToastMessageOptions {
  action?: {
    label: string;
    handler: () => void;
  };
}

export const useAppStore = defineStore("appStore", () => {
  const currentLanguage = ref<string>(LanguagesEnum.English);
  const isLoading: Ref<boolean> = ref(false);
  const isShowLoginPopup = ref(false);
  const isShowSignupPopup = ref(false);
  const toast = ref<ToastConfig | null>(null);

  const updateLanguage = (value: string) => {
    currentLanguage.value = value;
  };

  const updateToast = (value: ToastConfig | null) => {
    toast.value = value;
  };

  const updateIsLoading = (value: boolean) => {
    isLoading.value = value;
  };

  const updateLoginPopup = (val: boolean) => {
    isShowLoginPopup.value = val;
  };

  const updateSignupPopup = (val: boolean) => {
    isShowSignupPopup.value = val;
  };

  const showToast = (config: ToastConfig) => {
    updateToast({ ...config, life: config.life ?? DEFAULT_TOAST_LIFE_TIME });
  };

  return {
    currentLanguage,
    isLoading,
    isShowLoginPopup,
    isShowSignupPopup,
    toast,

    showToast,
    updateIsLoading,
    updateLanguage,
    updateLoginPopup,
    updateSignupPopup,
  };
});
