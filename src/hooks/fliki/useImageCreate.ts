import { AxiosError } from "axios";
import { isArray } from "lodash";

import { RequestMethod, useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
import { getBalance } from "@/hooks/user/useGetBalance";
import lang from "@/i18n";
import { useAppStore } from "@/store/app/appStore";
import { HookConfig } from "@/types/api";
import { ToastSeverity } from "@/types/toast";

type ImageBody = {
  content: string;
  style: string;
};

export const useImageCreate = async <R>(body: ImageBody, config?: HookConfig): Promise<string> => {
  const appStore = useAppStore();
  const { updateIsLoading, showToast } = appStore;
  const { request, data } = useApi<R | null>({
    path: API_ROUTES.IMAGE_CREATE as string,
    method: RequestMethod.Post,
    body,
  });

  if (!config?.noLoader) {
    updateIsLoading(true);
  }

  try {
    await request();

    showToast({
      summary: lang.message.Image,
      severity: ToastSeverity.Success,
      detail: lang.success.imageGenerated,
    });

    if (data) {
      await getBalance();
      return data.value.data.image;
    }
  } catch (e) {
    let errorMessage = lang.error.somethingWentWrong;

    if (e instanceof AxiosError) {
      errorMessage = isArray(e.response?.data.message) ? e.response?.data.message[0] : e.response?.data.message;
    }

    showToast({
      summary: lang.message.Image,
      severity: ToastSeverity.Error,
      detail: errorMessage,
    });
  } finally {
    if (!config?.noLoader) {
      updateIsLoading(false);
    }
  }
  return "";
};
