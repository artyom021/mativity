// import axios, { AxiosHeaders } from "axios";
// import { storeToRefs } from "pinia";
// import { stringify } from "qs";
// import { Ref, ref } from "vue";
//
// const OFFSET_TIME = 5 * 60 * 1000;
//
// export interface QueryParams {
//   [key: string]: unknown;
// }
//
// export interface BodyParams {
//   [key: string]: unknown;
// }
//
// interface ResponseType {
//   data: unknown;
//   headers: AxiosHeaders;
// }
//
// export interface Config {
//   path: string;
//   method?: string;
//   body?: BodyParams;
//   queryParams?: QueryParams;
// }
//
// export const API_BASE_ROUTE: string = process.env.VUE_APP_API_URL || "";
//
// export const isExpiredToken = (token: string | null): boolean => {
//   if (!token) {
//     return true;
//   }
//   const decodedToken: Record<string, string | number> = decodeCredential(token) as Record<string, string>;
//
//   return Date.now() >= (decodedToken.exp as number) * 1000 - OFFSET_TIME;
// };
//
// export function useApi(config: Config) {
//   const data = ref();
//   const response = ref({}) as Ref<ResponseType>;
//   const userStore = useUserStore();
//
//   const checkToken = async (token: string | null): Promise<void> => {
//     if (!token) {
//       try {
//         const res = await googleOneTap({ cancelOnTapOutside: false });
//         userStore.updateUserData(res);
//       } catch (e) {
//         userStore.updateUserAccess(false);
//       }
//
//       return;
//     }
//
//     const decodedToken: Record<string, string | number> = decodeCredential(token) as Record<string, string>;
//
//     if (Date.now() > (decodedToken.exp as number) * 1000 - OFFSET_TIME) {
//       try {
//         const res = await googleOneTap({ cancelOnTapOutside: false });
//         userStore.updateUserData(res);
//       } catch (e) {
//         userStore.updateUserAccess(false);
//       }
//     }
//   };
//
//   const request = async () => {
//     const method = (config.method || "get").toLowerCase();
//     const userStore = useUserStore();
//     const { apiToken } = storeToRefs(userStore);
//
//     await checkToken(apiToken.value);
//
//     const headers = {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${apiToken.value}`,
//     };
//
//     const { body, queryParams } = config;
//
//     try {
//       switch (method) {
//         case "post":
//           response.value = await axios.post(`${API_BASE_ROUTE}${config.path}`, body, {
//             params: queryParams,
//             paramsSerializer: {
//               serialize: (params) => {
//                 return stringify(params, { arrayFormat: "repeat" });
//               },
//             },
//
//             headers,
//           });
//
//           break;
//
//         case "patch":
//           response.value = await axios.patch(`${API_BASE_ROUTE}${config.path}`, body, {
//             params: queryParams,
//             paramsSerializer: {
//               serialize: (params) => {
//                 return stringify(params, { arrayFormat: "repeat" });
//               },
//             },
//             headers,
//           });
//
//           break;
//
//         case "put":
//           response.value = await axios.put(`${API_BASE_ROUTE}${config.path}`, body, {
//             params: queryParams,
//             paramsSerializer: {
//               serialize: (params) => {
//                 return stringify(params, { arrayFormat: "repeat" });
//               },
//             },
//             headers,
//           });
//
//           break;
//
//         case "delete":
//           response.value = await axios.delete(`${API_BASE_ROUTE}${config.path}`, {
//             params: queryParams,
//             data: body,
//             paramsSerializer: {
//               serialize: (params) => {
//                 return stringify(params, { arrayFormat: "repeat" });
//               },
//             },
//             headers,
//           });
//           userStore.updateShowMetric(true);
//           break;
//
//         default:
//           response.value = await axios.get(`${API_BASE_ROUTE}${config.path}`, {
//             params: queryParams,
//             paramsSerializer: {
//               serialize: (params) => {
//                 return stringify(params, { arrayFormat: "repeat" });
//               },
//             },
//             headers,
//           });
//
//           userStore.updateShowMetric(true);
//       }
//
//       userStore.updateUserAccess(true);
//       data.value = response.value?.data || {};
//     } catch (e) {
//       if (axios.isAxiosError(e) && (e.response?.status === 403 || e.response?.status === 401)) {
//         userStore.updateUserAccess(false);
//         userStore.updateShowMetric(false);
//       } else {
//         throw e;
//       }
//     }
//   };
//
//   return { data, request, response };
// }
