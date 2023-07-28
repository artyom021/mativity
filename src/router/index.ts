import { nextTick } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import { ROUTES } from "@/constants/routes";
import lang from "@/i18n";
import { routes } from "@/router/routes";

// TODO: Set to `true` in wpp_os_exp.
const IS_SPA = false;

// IL: We can't use web hash history with single-spa. Note that we can use createWebHistory instead.
const router = createRouter({
  history: createWebHashHistory(IS_SPA && process.env.NODE_ENV === "production" ? "/local/8500/sjs/main" : "/"),
  routes,
});

router.afterEach((to) => {
  nextTick(() => {
    document.title = to?.meta?.title || lang.title.defaultApp;
  });
});

router.beforeEach(async (to) => {
  if (process.env.VUE_APP_MODE === "development" && to.path === ROUTES.DEVELOPMENT.PATH) {
    return true;
  }

  if (to.path === ROUTES.TOOLS.PATH && process.env.VUE_APP_MODE !== "development") {
    return router.replace(ROUTES.ROOT.PATH);
  }
});

export default router;
