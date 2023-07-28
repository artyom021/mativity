
export enum RequestMode {
  Synchronous = "synchronous",
  Asynchronous = "asynchronous",
}

export interface HookStandardConfig {
  successMessage?: string;
  errorMessage?: string;
  noLoader: boolean;
}
