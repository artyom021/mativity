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
    NAME: "root",
  },

  NOT_FOUND: {
    PATH: "/not-found",
    NAME: "notFound",
  },

  PRIVACY_POLICY: {
    PATH: "/privcacy-policy",
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
    NAME: "textService",
  },

  IMAGE_SERVICE: {
    PATH: "/image-service",
    NAME: "imageService",
  },

  AUDIO_SERVICE: {
    PATH: "/image-service",
    NAME: "imageService",
  },
};
