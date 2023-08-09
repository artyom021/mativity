import { RouteRecordRaw } from "vue-router";

import { ROUTES } from "@/constants/routes";
import AudioService from "@/views/AudioService.vue";
import CreativeService from "@/views/CreativeService.vue";
import HomePage from "@/views/HomePage.vue";
import ImageService from "@/views/ImageService.vue";
import ParapharsingService from "@/views/ParapharsingService.vue";
import PoemsService from "@/views/PoemsService.vue";
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
    name: "home",
    link: ROUTES.ROOT.PATH,
  },
  {
    name: "text",
    link: ROUTES.TEXT_SERVICE.PATH,
  },
  {
    name: "audio",
    link: ROUTES.AUDIO_SERVICE.PATH,
  },
  {
    name: "image",
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

  {
    path: ROUTES.POEMS_SERVICE.PATH,
    name: ROUTES.POEMS_SERVICE.NAME,
    component: PoemsService,
  },

  {
    path: ROUTES.PARAPHRASING_SERVICE.PATH,
    name: ROUTES.PARAPHRASING_SERVICE.NAME,
    component: ParapharsingService,
  },

  {
    path: ROUTES.CREATIVE_SERVICE.PATH,
    name: ROUTES.CREATIVE_SERVICE.NAME,
    component: CreativeService,
  },
];
