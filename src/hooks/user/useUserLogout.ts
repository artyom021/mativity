import { useAppStore } from "@/store/app/appStore";
import { useUserStore } from "@/store/app/userStore";
export const MAXTIVITY_TOKEN_KEY = "maxtivity_token";
export const useUserLogout = async () => {
  const userStore = useUserStore();
  const { updateUser } = userStore;

  const appStore = useAppStore();
  const { updateIsLoading } = appStore;

  updateIsLoading(true);

  try {
    updateUser(null);
    localStorage.setItem(MAXTIVITY_TOKEN_KEY, "");
  } finally {
    updateIsLoading(false);
  }
};
