import { AxiosError } from "axios";
import { isArray } from "lodash";

import { RequestMethod, useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
import { MAXTIVITY_TOKEN_KEY } from "@/hooks/user/useUserRead";
import lang from "@/i18n";
import { useAppStore } from "@/store/app/appStore";
import { HookConfig } from "@/types/api";
import { ToastSeverity } from "@/types/toast";

export type UserRegistrationConfirm = {
  secret_code: string;
};

export const useRegistrationConfirm = async <R>(body: UserRegistrationConfirm, config?: HookConfig): Promise<void> => {
  const appStore = useAppStore();
  const { updateIsLoading, showToast } = appStore;
  const { request, data } = useApi<R>({
    path: API_ROUTES.REGISTRATION_CONFIRMATION as string,
    method: RequestMethod.Post,
    body,
  });

  if (!config?.noLoader) {
    updateIsLoading(true);
  }

  try {
    await request();

    showToast({
      summary: lang.message.registrationConfirmation,
      severity: ToastSeverity.Success,
      detail: lang.success.registrationFinished,
    });
    localStorage.setItem(MAXTIVITY_TOKEN_KEY, data.value.token);
  } catch (e) {
    let errorMessage = lang.error.somethingWentWrong;
    if (e instanceof AxiosError) {
      errorMessage = isArray(e.response?.data.message) ? e.response?.data.message[0] : e.response?.data.message;
    }
    console.log(e);
    showToast({
      summary: lang.message.registration,
      severity: ToastSeverity.Error,
      detail: errorMessage,
    });
  } finally {
    if (!config?.noLoader) {
      updateIsLoading(false);
    }
  }
};
