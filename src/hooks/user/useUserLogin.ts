import { AxiosError } from "axios";
import { isArray } from "lodash";

import { RequestMethod, useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
import { MAXTIVITY_TOKEN_KEY, getUserInfo } from "@/hooks/user/useUserRead";
import lang from "@/i18n";
import { useAppStore } from "@/store/app/appStore";
import { useUserStore } from "@/store/app/userStore";
import { HookConfig } from "@/types/api";
import { ToastSeverity } from "@/types/toast";

export type UserLogin = {
  email: string;
  password: string;
};

export const useUserLogin = async <R>(body: UserLogin, config?: HookConfig): Promise<string | null> => {
  const appStore = useAppStore();
  const { updateIsLoading, showToast } = appStore;

  const userStore = useUserStore();
  const { updateUserAccess, updateApiToken } = userStore;

  const { request, data } = useApi<R>({
    path: API_ROUTES.LOGIN as string,
    method: RequestMethod.Post,
    body,
  });

  if (!config?.noLoader) {
    updateIsLoading(true);
  }

  try {
    await request();

    showToast({
      summary: lang.message.login,
      severity: ToastSeverity.Success,
      detail: lang.success.login,
    });

    localStorage.setItem(MAXTIVITY_TOKEN_KEY, data.value.token);
    updateApiToken(data.value.token);

    await getUserInfo();
    updateUserAccess(true);
    return data.value.token;
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
    return null;
  } finally {
    if (!config?.noLoader) {
      updateIsLoading(false);
    }
  }
};
