// import { defineStore } from "pinia";
// import { ToastMessageOptions } from "primevue/toast";
// import { Ref, ref } from "vue";
//
// import { DEFAULT_TOAST_LIFE_TIME } from "@/constants/toast";
//
// interface ToastConfig extends ToastMessageOptions {
//   action?: {
//     label: string;
//     handler: () => void;
//   };
// }
//
// export const useAppStore = defineStore("appStore", () => {
//   const toast: Ref<ToastConfig | null> = ref(null);
//   const isLoading: Ref<boolean> = ref(false);
//   const isShowPersistentLoader: Ref<boolean> = ref(false);
//   const isLoadingExtendedData: Ref<boolean> = ref(false);
//   const isVideoLoader: Ref<boolean> = ref(false);
//   const isPostRequestRunning: Ref<boolean> = ref(false);
//
//   // TODO: [CUSTOMER DECISION] That's a temporary decision.
//   const DEVELOPMENT_HOST_URL = "develop.c9h-og-frontend.pages.dev";
//   const isDevelopmentMode = process.env.NODE_ENV === "development" || window.location.host === DEVELOPMENT_HOST_URL;
//
//   const updateToast = (value: ToastConfig | null) => {
//     toast.value = value;
//   };
//
//   const updateIsLoading = (value: boolean) => {
//     isLoading.value = value;
//   };
//
//   const updateIsShowPersistentLoader = (value: boolean) => {
//     isShowPersistentLoader.value = value;
//   };
//
//   const updateIsLoadingExtendedData = (value: boolean) => {
//     isLoadingExtendedData.value = value;
//   };
//
//   const updateIsVideoLoader = (value: boolean) => {
//     isVideoLoader.value = value;
//   };
//
//   const updateIsPostRequestRunning = (value: boolean) => {
//     isPostRequestRunning.value = value;
//   };
//
//   const showToast = (config: ToastConfig) => {
//     updateToast({ ...config, life: config.life ?? DEFAULT_TOAST_LIFE_TIME });
//   };
//
//   return {
//     updateToast,
//     updateIsLoading,
//     updateIsShowPersistentLoader,
//     updateIsLoadingExtendedData,
//     updateIsVideoLoader,
//     updateIsPostRequestRunning,
//     showToast,
//     toast,
//     isLoading,
//     isLoadingExtendedData,
//     isDevelopmentMode,
//     isVideoLoader,
//     isPostRequestRunning,
//     isShowPersistentLoader,
//   };
// });
