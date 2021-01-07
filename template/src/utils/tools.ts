import { Toast } from "antd-mobile";

/**
 * 提示
 */
export function openTip(val: string, duration: number = 1.8) {
  Toast.info(val, duration);
}

/**
 * 去登录
 */
export function goLogin() {
}