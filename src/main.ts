import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import unoverlay from "unoverlay-vue";
import { createApp } from "vue";

import i18nPlugin from "@/plugins/i18nPlugin";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "primevue/resources/primevue.min.css";
import "@/scss/_theme.css";

createApp(App)
  .use(store)
  .use(router)
  .use(i18nPlugin)
  .use(PrimeVue)
  .use(unoverlay)
  .use(ConfirmationService)
  .use(ToastService)
  .mount("#app");
