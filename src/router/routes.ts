import { RouteRecordRaw } from "vue-router";

import { ROUTES } from "@/constants/routes";
import AudioService from "@/views/AudioService.vue";
import HomePage from "@/views/HomePage.vue";
import ImageService from "@/views/ImageService.vue";
import TextService from "@/views/TextService.vue";

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

  {
    path: ROUTES.TEXT_SERVICE.PATH,
    name: ROUTES.TEXT_SERVICE.NAME,
    component: TextService,
  },

  {
    path: ROUTES.AUDIO_SERVICE.PATH,
    name: ROUTES.AUDIO_SERVICE.NAME,
    component: AudioService,
  },

  {
    path: ROUTES.IMAGE_SERVICE.PATH,
    name: ROUTES.IMAGE_SERVICE.NAME,
    component: ImageService,
  },
];
