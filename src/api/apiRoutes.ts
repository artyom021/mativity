type ApiRoutes = Record<string, string | ((value: string | number) => string)>;

export const API_ROUTES: ApiRoutes = {
  REGISTRATION: "/registration",
  ME: "/me",
  LOGIN: "/login",
};
