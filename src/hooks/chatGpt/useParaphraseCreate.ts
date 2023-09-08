import { RequestMethod, useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
import lang from "@/i18n";
import { useAppStore } from "@/store/app/appStore";
import { HookConfig } from "@/types/api";
import { ToastSeverity } from "@/types/toast";

type ParaphraseBody = {
  text: string;
  styleId: number;
};

export const useParaphraseCreate = async <R>(body: ParaphraseBody, config?: HookConfig): Promise<string | null> => {
  const appStore = useAppStore();
  const { updateIsLoading, showToast } = appStore;
  const { request, data } = useApi<R | null>({
    path: API_ROUTES.PARAPHRASE_GENERATE as string,
    method: RequestMethod.Post,
    body,
  });

  if (!config?.noLoader) {
    updateIsLoading(true);
  }

  try {
    await request();

    showToast({
      summary: lang.message.paraphrase,
      severity: ToastSeverity.Success,
      detail: lang.success.textParaphrased,
    });

    if (data) {
      return data.value.data;
    }
  } catch (e) {
    showToast({
      summary: lang.message.paraphrase,
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
