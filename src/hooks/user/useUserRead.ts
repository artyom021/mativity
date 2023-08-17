import { useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";

export const MAXTIVITY_TOKEN_KEY = "maxtivity_token";

// const checkToken = (token: string | null): boolean => {
//   if (!token) {
//     return false;
//   }
//
//   const decodedToken = decodeCredential(token) as Record<string, string>;
//   const expiresIn = Number(decodedToken.expires_in);
//   return Number(decodedToken.created_at) + expiresIn >= Date.now() - OFFSET_TIME;
// };

export const getToken = async () => {
  // const appStore = useAppStore();
  // const { updateIsLoading } = appStore;
  const { request, data } = useApi<string>({
    path: API_ROUTES.ME as string,
  });

  // updateIsLoading(true);
  try {
    await request();
    console.log(data.value);

    if (data.value) {
      localStorage.setItem(MAXTIVITY_TOKEN_KEY, data.value);
      return data.value;
    }
  } finally {
    // updateIsLoading(false);
  }
};
