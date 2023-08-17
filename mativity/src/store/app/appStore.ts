import { defineStore } from "pinia";
import { ToastMessageOptions } from "primevue/toast";
import { Ref, ref } from "vue";

import { LanguagesEnum } from "@/settings/languages";

interface ToastConfig extends ToastMessageOptions {
  action?: {
    label: string;
    handler: () => void;
  };
}

export const useAppStore = defineStore("appStore", () => {
  const isLoading: Ref<boolean> = ref(false);
  const currentLanguage = ref<string>(LanguagesEnum.English);
  const updateLanguage = (value: string) => {
    currentLanguage.value = value;
  };

  const isShowLoginPopup = ref(false);
  const isShowSignupPopup = ref(false);

  const updateLoginPopup = (val: boolean) => {
    isShowLoginPopup.value = val;
  };

  const updateSignupPopup = (val: boolean) => {
    isShowSignupPopup.value = val;
  };

  return {
    isLoading,
    currentLanguage,
    updateLanguage,
    isShowLoginPopup,
    isShowSignupPopup,
    updateSignupPopup,
    updateLoginPopup,
  };
});
