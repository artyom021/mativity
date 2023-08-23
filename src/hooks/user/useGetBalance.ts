import { useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
import { useAppStore } from "@/store/app/appStore";
import { useUserStore } from "@/store/app/userStore";

export const getBalance = async () => {
  const userStore = useUserStore();
  const { setUserBalance } = userStore;
  const appStore = useAppStore();
  const { updateIsLoading } = appStore;
  const { request, data } = useApi<string>({
    path: API_ROUTES.GET_BALANCE as string,
  });

  updateIsLoading(true);
  try {
    await request();

    if (data.value) {
      setUserBalance(data.value.balance);
      return data.value;
    }
  } finally {
    updateIsLoading(false);
  }
};
