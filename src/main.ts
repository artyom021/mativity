import IllestWaveform from "1llest-waveform-vue";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import unoverlay from "unoverlay-vue";
import { createApp } from "vue";
import "1llest-waveform-vue/lib/style.css";

import i18nPlugin from "@/plugins/i18nPlugin";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/scss/themenew.css";

createApp(App)
  .use(store)
  .use(router)
  .use(i18nPlugin)
  .use(PrimeVue)
  .use(unoverlay)
  .use(ConfirmationService)
  .use(ToastService)
  .use(IllestWaveform)
  .mount("#app");
