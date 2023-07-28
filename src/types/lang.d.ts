import { Lang } from "@/types/index";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    // Without 'unknown' here IDE highlights $lang in the template attributes values,
    // because $lang is not only string, so we need to cast it to string at every call;
    $lang: Lang | unknown;
  }
}

export type Lang = Record<string, T>;
