type Route = {
  PATH: string;
  NAME: string;
};

export interface RoutesType {
  [key: string]: Route;
}

export const ROUTES: RoutesType = {
  LOGIN: {
    PATH: "/login",
    NAME: "login",
  },

  ROOT: {
    PATH: "/",
    NAME: "home",
  },

  NOT_FOUND: {
    PATH: "/not-found",
    NAME: "notFound",
  },

  PRIVACY_POLICY: {
    PATH: "/privacy-policy",
    NAME: "privacyPolicy",
  },

  TERMS_OF_USE: {
    PATH: "/terms-of-use",
    NAME: "termsOfUse",
  },

  CONTACT_US: {
    PATH: "/contact-us",
    NAME: "contactUs",
  },

  TEXT_SERVICE: {
    PATH: "/text-service",
    NAME: "text",
  },

  IMAGE_SERVICE: {
    PATH: "/image-service",
    NAME: "image",
  },

  AUDIO_SERVICE: {
    PATH: "/audio-service",
    NAME: "audio",
  },

  POEMS_SERVICE: {
    PATH: "/poems-service",
    NAME: "textPoems",
  },

  PARAPHRASING_SERVICE: {
    PATH: "/paraphrasing-service",
    NAME: "textParaphrasing",
  },

  CREATIVE_SERVICE: {
    PATH: "/creative-service",
    NAME: "textCreative",
  },

  IMAGE_GENERATOR: {
    PATH: "/image-generator",
    NAME: "imageGenerator",
  },

  AUDIO_GENERATOR: {
    PATH: "/audio-generator",
    NAME: "audioGenerator",
  },

  AUDIO_GENERATOR_NEW: {
    PATH: "/audio-generator-new",
    NAME: "audioGenerator-new",
  },

  PROFILE: {
    PATH: "/profile",
    NAME: "profile",
  },

  USER_TRANSACTIONS: {
    PATH: "/user-transactions",
    NAME: "user-transactions",
  },

  BUY_NEURONS: {
    PATH: "/buy-neurons",
    NAME: "buy-neurons",
  },

  LOGOUT: {
    PATH: "/logout",
    NAME: "logout",
  },

  ADMIN_LOGIN: {
    PATH: "/admin-login",
    NAME: "admin-login",
  },

  ADMIN_PANEL: {
    PATH: "/admin-panel",
    NAME: "admin-panel",
  },

  REGISTRATION: {
    PATH: "/registration",
    NAME: "registration",
  },
};

export const ROUTE_MAPPING: { [key: string]: string } = {
  home: "home",
  text: "text",
  textPoems: "text",
  textParaphrasing: "text",
  textCreative: "text",
  image: "image",
  imageGenerator: "image",
  audio: "audio",
  audioGenerator: "audio",
};
