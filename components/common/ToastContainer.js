import { App } from "antd";

let toast;
export default function ToastContainer() {
  const { message } = App?.useApp();
  toast = message;
  return null;
}

export function toastSuccess(content) {
  toast?.success(content);
}

export function toastInfo(content) {
  toast?.info(content);
}

export function toastError(content) {
  toast?.error(content);
}

export function toastWarning(content) {
  toast?.warning(content);
}

export function toastDestroy(content) {
  toast?.destroy(content);
}
