import { AxiosError } from "axios";
import { isArray } from "lodash";

import { RequestMethod, useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
import { getBalance } from "@/hooks/user/useGetBalance";
import lang from "@/i18n";
import { useAppStore } from "@/store/app/appStore";
import { HookConfig } from "@/types/api";
import { ToastSeverity } from "@/types/toast";

type VerseBody = {
  theme: string;
  styleId: number;
  stanzaCount: number;
  stanzaSize: number;
};

export const useVerseCreate = async <R>(body: VerseBody, config?: HookConfig): Promise<string | null> => {
  const appStore = useAppStore();
  const { updateIsLoading, showToast } = appStore;
  const { request, data } = useApi<R | null>({
    path: API_ROUTES.VERSE_GENERATE as string,
    method: RequestMethod.Post,
    body,
  });

  if (!config?.noLoader) {
    updateIsLoading(true);
  }

  try {
    await request();

    showToast({
      summary: lang.message.createPoem,
      severity: ToastSeverity.Success,
      detail: lang.success.poem,
    });

    if (data) {
      await getBalance();
      return data.value.data;
    }
  } catch (e) {
    let errorMessage = lang.error.somethingWentWrong;

    if (e instanceof AxiosError) {
      errorMessage = isArray(e.response?.data.message) ? e.response?.data.message[0] : e.response?.data.message;
    }
    showToast({
      summary: lang.message.createPoem,
      severity: ToastSeverity.Error,
      detail: errorMessage,
    });
  } finally {
    if (!config?.noLoader) {
      updateIsLoading(false);
    }
  }
  return null;
};
