import { AxiosError } from "axios";
import { isArray } from "lodash";

import { useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
import { getBalance } from "@/hooks/user/useGetBalance";
import { useUserLogout } from "@/hooks/user/useUserLogout";
import lang from "@/i18n";
import { useAppStore } from "@/store/app/appStore";
import { User, useUserStore } from "@/store/app/userStore";
import { ToastSeverity } from "@/types/toast";

export const MAXTIVITY_TOKEN_KEY = "maxtivity_token";

export const getUserInfo = async (): Promise<User | null> => {
  const userStore = useUserStore();
  const { updateUser, updateUserAccess } = userStore;

  const appStore = useAppStore();
  const { updateIsLoading, showToast } = appStore;

  const { request, data } = useApi<string>({
    path: API_ROUTES.ME as string,
  });

  updateIsLoading(true);

  try {
    await request();

    if (data.value) {
      updateUser({ name: data.value.name, email: data.value.email, account_type: data.value.account_type });
      await getBalance();
      updateUserAccess(true);
      return data.value;
    }
  } catch (e) {
    let errorMessage = lang.error.somethingWentWrong;
    if (e instanceof AxiosError) {
      errorMessage = isArray(e.response?.data.message) ? e.response?.data.message[0] : e.response?.data.message;
    }
    showToast({
      summary: lang.message.login,
      severity: ToastSeverity.Error,
      detail: errorMessage,
    });
    await useUserLogout();
  } finally {
    updateIsLoading(false);
  }
  updateUserAccess(false);
  return null;
};
