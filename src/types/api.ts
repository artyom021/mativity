export enum RequestMode {
  Synchronous = "synchronous",
  Asynchronous = "asynchronous",
}

export interface HookStandardConfig {
  successMessage?: string;
  errorMessage?: string;
  noLoader: boolean;
}

export interface HookConfig {
  successMessage?: string;
  errorMessage?: string;
  noLoader?: boolean;
  noToast?: boolean;
}
