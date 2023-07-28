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
};
