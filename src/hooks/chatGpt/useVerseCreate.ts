import { RequestMethod, useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
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
      return data.value.data;
    }
  } catch (e) {
    showToast({
      summary: lang.message.createPoem,
      severity: ToastSeverity.Error,
      detail: lang.error.somethingWentWrong,
    });
  } finally {
    if (!config?.noLoader) {
      updateIsLoading(false);
    }
  }
  return null;
};
