import { ToastMessageOptions } from "primevue/toast";

export enum ToastSeverity {
  Error = "error",
  Success = "success",
  Info = "info",
  Warn = "warn",
}

export interface ToastConfig extends ToastMessageOptions {
  action?: {
    label: string;
    handler: () => void;
  };
}
