import { AxiosError } from "axios";
import { isArray } from "lodash";

import { useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
import lang from "@/i18n";
import { useAppStore } from "@/store/app/appStore";
import { ToastSeverity } from "@/types/toast";

export const getParaphraseStyles = async (): Promise<any[]> => {
  const appStore = useAppStore();
  const { updateIsLoading, showToast } = appStore;

  const { request, data } = useApi<string>({
    path: API_ROUTES.GET_PARAPHRASE_STYLE as string,
  });

  updateIsLoading(true);

  try {
    await request();

    if (data.value) {
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
  } finally {
    updateIsLoading(false);
  }
  return [];
};
