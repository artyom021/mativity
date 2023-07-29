import { RouteRecordRaw } from "vue-router";

import { ROUTES } from "@/constants/routes";
import HomePage from "@/views/HomePage.vue";

export const FOOTER_LINKS = [
  {
    name: "Privacy Policy",
    link: ROUTES.PRIVACY_POLICY.PATH,
  },
  {
    name: "Terms of Use",
    link: ROUTES.TERMS_OF_USE.PATH,
  },
  {
    name: "Contact Us",
    link: ROUTES.CONTACT_US.PATH,
  },
];

export const HEADER_LINKS = [
  {
    name: "Home",
    link: ROUTES.ROOT.PATH,
  },
  {
    name: "Text",
    link: ROUTES.TEXT_SERVICE.PATH,
  },
  {
    name: "Audio",
    link: ROUTES.AUDIO_SERVICE.PATH,
  },
  {
    name: "Image",
    link: ROUTES.IMAGE_SERVICE.PATH,
  },
];

export const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTES.ROOT.PATH,
    name: ROUTES.ROOT.NAME,
    component: HomePage,
  },
];
