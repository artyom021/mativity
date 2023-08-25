import { useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
import { getBalance } from "@/hooks/user/useGetBalance";
import { useAppStore } from "@/store/app/appStore";
import { User, useUserStore } from "@/store/app/userStore";

export const MAXTIVITY_TOKEN_KEY = "maxtivity_token";

export const getUserInfo = async (): Promise<User | null> => {
  const userStore = useUserStore();
  const { updateUser, updateUserAccess } = userStore;
  const appStore = useAppStore();

  const { updateIsLoading } = appStore;
  const { request, data } = useApi<string>({
    path: API_ROUTES.ME as string,
  });

  updateIsLoading(true);

  try {
    await request();

    if (data.value) {
      updateUser({ name: data.value.name, email: data.value.email });
      await getBalance();
      updateUserAccess(true);
      return data.value;
    }
  } finally {
    updateIsLoading(false);
  }
  updateUserAccess(false);
  return null;
};
