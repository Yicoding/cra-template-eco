import axios from "axios";
import { Dialog } from "@wonder-ui/core";
import { goLogin } from 'src/utils/tools';
const { toast } = Dialog;

/**
 * 可在该模块编写部分业务逻辑，如请求头token，请求失败/登录过期/服务错误等处理
 * axios 文档：https://github.com/axios/axios#request-config
 */
export default function request({ preloader = true, ...options }) {
  if (preloader) {
    // Preloader.show();
  }
  return axios({
    // eslint-disable-next-line
    baseURL: process.env.PUBLIC_URL, // 在 doly.config.js 中配置
    ...options
  })
    .then(res => {
      if (preloader) {
        // Preloader.hide();
      }
      // 请求成功处理，一般会有其他逻辑处理。如登录过期、特殊responseCode等
      // 请求成功处理
      if (res.data.code === "0000") {
        return res.data.data;
      }

      // 登录过期需重新登录
      if (res.data.code === "unite0007") {
        sessionStorage.removeItem("loginToken");
        toast("登录超时，请重新登录");
        return goLogin();
      }

      // token不存在
      if (res.data.code === "unite0003") {
        sessionStorage.removeItem("loginToken");
        return goLogin();
      }

      return Promise.reject(res.data);
    })
    .catch(err => {
      console.log("err", err);
      if (preloader) {
        // Preloader.hide();
      }
      // 断网了
      if (!err.header) {
        return toast("网络好像断了，刷新页面试试吧");
      }
      // 请求失败处理，一般是全局错误提示
      toast(err.header.rspMsg);
      return Promise.reject(err);
    });
}
