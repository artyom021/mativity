import axios, { AxiosHeaders } from "axios";
import { stringify } from "qs";
import { Ref, ref } from "vue";

export interface QueryParams {
  [key: string]: unknown;
}

export interface BodyParams {
  [key: string]: unknown;
}

interface ResponseType {
  data: unknown;
  headers: AxiosHeaders;
}

export enum RequestMethod {
  Get = "get",
  Post = "post",
  Put = "put",
  Patch = "patch",
  Delete = "delete",
}

export interface Config {
  path: string;
  method?: string;
  body?: BodyParams;
  queryParams?: QueryParams;
}

export const API_BASE_ROUTE: string = process.env.VUE_APP_API_URL || "";

export function useApi<T>(config: Config) {
  const data = ref();
  const response = ref({}) as Ref<ResponseType>;

  const checkToken = async (token: string | null): Promise<void> => {
    if (!token) {
      try {
        console.log(11);
      } catch (e) {
        console.log(e);
      }

      return;
    }
  };

  const request = async () => {
    const method = (config.method || "get").toLowerCase();
    const apiToken = "asdasd";
    await checkToken(apiToken);

    const headers = {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${apiToken}`,
    };

    const { body, queryParams } = config;

    try {
      switch (method) {
        case "post":
          response.value = await axios.post(`${API_BASE_ROUTE}${config.path}`, body, {
            params: queryParams,
            paramsSerializer: {
              serialize: (params) => {
                return stringify(params, { arrayFormat: "repeat" });
              },
            },

            headers,
          });

          break;

        case "patch":
          response.value = await axios.patch(`${API_BASE_ROUTE}${config.path}`, body, {
            params: queryParams,
            paramsSerializer: {
              serialize: (params) => {
                return stringify(params, { arrayFormat: "repeat" });
              },
            },
            headers,
          });

          break;

        case "put":
          response.value = await axios.put(`${API_BASE_ROUTE}${config.path}`, body, {
            params: queryParams,
            paramsSerializer: {
              serialize: (params) => {
                return stringify(params, { arrayFormat: "repeat" });
              },
            },
            headers,
          });

          break;

        case "delete":
          response.value = await axios.delete(`${API_BASE_ROUTE}${config.path}`, {
            params: queryParams,
            data: body,
            paramsSerializer: {
              serialize: (params) => {
                return stringify(params, { arrayFormat: "repeat" });
              },
            },
            headers,
          });
          break;

        default:
          response.value = await axios.get(`${API_BASE_ROUTE}${config.path}`, {
            params: queryParams,
            paramsSerializer: {
              serialize: (params) => {
                return stringify(params, { arrayFormat: "repeat" });
              },
            },
            headers,
          });
      }

      data.value = response.value?.data || {};
    } catch (e) {
      if (axios.isAxiosError(e) && (e.response?.status === 403 || e.response?.status === 401)) {
        console.log(111);
      } else {
        throw e;
      }
    }
  };

  return { data, request, response };
}
