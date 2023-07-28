import { App } from "vue";

import lang from "@/i18n";

export default {
  install: (app: App) => (app.config.globalProperties.$lang = lang),
};
