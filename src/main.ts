import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { createApp } from "vue";

import i18nPlugin from "@/plugins/i18nPlugin";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-purple/theme.css";

createApp(App).use(store).use(router).use(i18nPlugin).use(PrimeVue).use(ToastService).mount("#app");
