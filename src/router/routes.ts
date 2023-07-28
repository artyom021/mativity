import { RouteRecordRaw } from "vue-router";

import { ROUTES } from "@/constants/routes";
import router from "@/router/index";
import DevelopmentPage from "@/views/DevelopmentPage.vue";

const LoginView = () => import("@/views/LoginView.vue");

export const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTES.LOGIN.PATH,
    name: ROUTES.LOGIN.NAME,
    component: LoginView,
  },

  {
    path: ROUTES.DEVELOPMENT.PATH,
    name: ROUTES.DEVELOPMENT.NAME,
    component: DevelopmentPage,
    beforeEnter: async () => {
      if (process.env.VUE_APP_MODE !== "development") {
        await router.push({ path: ROUTES.ROOT.PATH });
      }
    },
  },
];
