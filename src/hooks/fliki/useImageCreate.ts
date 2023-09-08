import { RequestMethod, useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
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
      return data.value.data.image;
    }
  } catch (e) {
    showToast({
      summary: lang.message.Image,
      severity: ToastSeverity.Error,
      detail: lang.error.somethingWentWrong,
    });
  } finally {
    if (!config?.noLoader) {
      updateIsLoading(false);
    }
  }
  return "";
};
