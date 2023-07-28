import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";
import { createApp } from "vue";
import vue3GoogleLogin from "vue3-google-login";

import i18nPlugin from "@/plugins/i18nPlugin";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/saga-purple/theme.css";
import "@/scss/overridePrimeVue.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .use(ToastService)
  .use(vue3GoogleLogin, {
    clientId: process.env.VUE_APP_CLIENT_ID,
  })
  .use(PrimeVue)
  .use(i18nPlugin)
  .directive("tooltip", Tooltip)
  .mount("#app");
