import { RouteRecordRaw } from "vue-router";

import { ROUTES } from "@/constants/routes";
import AdminLogin from "@/views/AdminLogin.vue";
import AdminPanel from "@/views/AdminPanel.vue";
import AudioGenerator from "@/views/AudioGenerator.vue";
import AudioService from "@/views/AudioService.vue";
import BuyNeurons from "@/views/BuyNeurons.vue";
import CreativeService from "@/views/CreativeService.vue";
import HomePage from "@/views/HomePage.vue";
import ImageService from "@/views/ImageService.vue";
import ImagesGenerator from "@/views/ImagesGenerator.vue";
import BuyNeuronsService from "@/views/NewBuyNeurons.vue";
import ParapharsingService from "@/views/ParapharsingService.vue";
import PoemsService from "@/views/PoemsService.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import TextService from "@/views/TextService.vue";
import UserTransactions from "@/views/UserTransactions.vue";

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

  {
    path: ROUTES.IMAGE_GENERATOR.PATH,
    name: ROUTES.IMAGE_GENERATOR.NAME,
    component: ImagesGenerator,
  },

  {
    path: ROUTES.AUDIO_GENERATOR.PATH,
    name: ROUTES.AUDIO_GENERATOR.NAME,
    component: AudioGenerator,
  },

  {
    path: ROUTES.AUDIO_GENERATOR_NEW.PATH,
    name: ROUTES.AUDIO_GENERATOR_NEW.NAME,
    component: BuyNeuronsService,
  },

  {
    path: ROUTES.PROFILE.PATH,
    name: ROUTES.PROFILE.NAME,
    component: ProfilePage,
  },

  {
    path: ROUTES.BUY_NEURONS.PATH,
    name: ROUTES.BUY_NEURONS.NAME,
    component: BuyNeurons,
  },

  {
    path: ROUTES.USER_TRANSACTIONS.PATH,
    name: ROUTES.USER_TRANSACTIONS.NAME,
    component: UserTransactions,
  },

  {
    path: ROUTES.PROFILE.PATH,
    name: ROUTES.PROFILE.NAME,
    component: ProfilePage,
  },

  {
    path: ROUTES.LOGOUT.PATH,
    name: ROUTES.LOGOUT.NAME,
    component: HomePage,
  },

  {
    path: ROUTES.ADMIN_LOGIN.PATH,
    name: ROUTES.ADMIN_LOGIN.NAME,
    component: AdminLogin,
  },

  {
    path: ROUTES.ADMIN_PANEL.PATH,
    name: ROUTES.ADMIN_PANEL.NAME,
    component: AdminPanel,
  },

  {
    path: ROUTES.REGISTRATION.PATH,
    name: ROUTES.REGISTRATION.NAME,
    component: HomePage,
    props: (route) => ({ secret_code: route.query.secret_code }),
  },
];
