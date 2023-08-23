type ApiRoutes = Record<string, string | ((value: string | number) => string)>;

export const API_ROUTES: ApiRoutes = {
  REGISTRATION: "/registration",
  ME: "/me",
  LOGIN: "/login",
  GET_BALANCE: "/get-balance",
  CHANGE_PASSWORD: "/change-password",
};
