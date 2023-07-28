// import axios from "axios";
// import { storeToRefs } from "pinia";
// import { stringify } from "qs";
// import { nextTick } from "vue";
// import { createRouter, createWebHashHistory } from "vue-router";
//
// import { API_BASE_ROUTE, isExpiredToken } from "@/api";
// import { API_ROUTES } from "@/api/apiRoutes";
// import { ROUTES } from "@/constants/routes";
// import { CatalogMember } from "@/hooks/apiHooks/catalog/useCatalogRead";
// import { useCatalogReadSubCatalog } from "@/hooks/apiHooks/catalog/useCatalogReadSubCatalog";
// import lang from "@/i18n";
// import { routes } from "@/router/routes";
// import { useCatalogStore } from "@/store/catalog/catalogStore";
// import { useUserStore } from "@/store/user/userStore";
// import { useWppOs } from "@/store/wppOs/wppOs";
//
// // TODO: Set to `true` in wpp_os_exp.
// const IS_SPA = false;
//
// // IL: We can't use web hash history with single-spa. Note that we can use createWebHistory instead.
// const router = createRouter({
//   history: createWebHashHistory(IS_SPA && process.env.NODE_ENV === "production" ? "/local/8500/sjs/main" : "/"),
//   routes,
// });
//
// router.afterEach((to) => {
//   nextTick(() => {
//     document.title = to?.meta?.title || lang.title.defaultApp;
//   });
// });
//
// router.beforeEach(async (to) => {
//   const catalogStore = useCatalogStore();
//   const { catalog } = storeToRefs(catalogStore);
//   const userStore = useUserStore();
//   const { updateShowMetric } = userStore;
//   const { apiToken } = storeToRefs(userStore);
//
//   const wppOs = useWppOs();
//
//   if (IS_SPA && process.env.NODE_ENV !== "development") {
//     await wppOs.waitContext();
//   }
//
//   if (process.env.VUE_APP_MODE === "development" && to.path === ROUTES.DEVELOPMENT.PATH) {
//     return true;
//   }
//
//   if (to.path === ROUTES.TOOLS.PATH && process.env.VUE_APP_MODE !== "development") {
//     return router.replace(ROUTES.ROOT.PATH);
//   }
//
//   if (!apiToken.value && to.path !== ROUTES.LOGIN.PATH) {
//     userStore.updateUserAccess(false);
//     userStore.updateShowMetric(false);
//     await router.replace(ROUTES.LOGIN.PATH);
//   }
//
//   if (apiToken.value && isExpiredToken(apiToken.value) && to.path !== ROUTES.LOGIN.PATH) {
//     userStore.updateShowMetric(false);
//     await useCatalogReadSubCatalog(CatalogMember.Products);
//   }
//
//   if (apiToken.value && !isExpiredToken(apiToken.value) && to.path !== ROUTES.LOGIN.PATH && !catalog.value.products) {
//     const headers = {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${apiToken.value}`,
//     };
//     try {
//       await axios.get(`${API_BASE_ROUTE}${API_ROUTES.CATALOG}`, {
//         params: { members: CatalogMember.Products },
//         paramsSerializer: {
//           serialize: (params) => {
//             return stringify(params, { arrayFormat: "repeat" });
//           },
//         },
//         headers,
//       });
//
//       await useCatalogReadSubCatalog(CatalogMember.Products);
//       updateShowMetric(true);
//     } catch (e) {
//       userStore.updateUserAccess(false);
//       await router.replace(ROUTES.LOGIN.PATH);
//     }
//   }
// });
//
// export default router;
