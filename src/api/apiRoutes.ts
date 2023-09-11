type ApiRoutes = Record<string, string | ((value: string | number) => string)>;

export const API_ROUTES: ApiRoutes = {
  REGISTRATION: "/registration",
  ME: "/me",
  LOGIN: "/login",
  GET_BALANCE: "/get-balance",
  CHANGE_PASSWORD: "/change-password",
  GET_TRANSACTIONS: "/get-my-transactions",
  GET_USERS: "/users",
  GET_TRANSACTIONS_ADMIN: "/transactions",
  GET_STYLES: "/verses/styles",
  GET_THEMES: "/verses/themes",
  GET_PARAPHRASE_STYLE: "/paraphrase/styles",
  PARAPHRASE_GENERATE: "/paraphrase/generate",
  VERSE_GENERATE: "/verses/generate",
  CREATIVE_GENERATE: "/creative/generate",
  IMAGE_CREATE: "/images/generate",
  REGISTRATION_CONFIRMATION: "/registration-confirm",
  PAYMENT: "/get-pay-link",
};
