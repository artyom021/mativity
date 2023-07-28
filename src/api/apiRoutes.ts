type ApiRoutes = Record<string, string | ((value: string | number) => string)>;

export const API_ROUTES: ApiRoutes = {
  SELECTED_OCCASION: "/v2/ui/occasions/selected",
};
