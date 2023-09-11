import { storeToRefs } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";

import { ROUTES } from "@/constants/routes";
import { useUserLogout } from "@/hooks/user/useUserLogout";
import { getUserInfo } from "@/hooks/user/useUserRead";
import { useRegistrationConfirm } from "@/hooks/user/useUserRegistrationConfirm";
import lang from "@/i18n";
import { routes } from "@/router/routes";
import { useAppStore } from "@/store/app/appStore";
import { useUserStore } from "@/store/app/userStore";
import { ToastSeverity } from "@/types/toast";

const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

router.beforeEach(async (to) => {
  const appStore = useAppStore();
  const { showToast } = appStore;

  const userStore = useUserStore();
  const { updateUserAccess } = userStore;
  const { user, apiToken } = storeToRefs(userStore);

  if (apiToken.value && !user.value) {
    await getUserInfo();
  }

  if (to.path === ROUTES.LOGOUT.PATH) {
    await useUserLogout();
    await router.replace(ROUTES.ROOT.PATH);
    updateUserAccess(false);

    showToast({
      summary: lang.message.logout,
      severity: ToastSeverity.Success,
      detail: lang.success.logout,
    });
  }

  if (to.path === ROUTES.REGISTRATION.PATH) {
    if (to.query.secret_code) {
      await useRegistrationConfirm({ secret_code: to.query.secret_code as string });
    }
  }

  if (to.path === ROUTES.ADMIN_PANEL.PATH && user.value?.account_type !== "admin") {
    await router.replace(ROUTES.ADMIN_LOGIN.PATH);
  }
});

export default router;
