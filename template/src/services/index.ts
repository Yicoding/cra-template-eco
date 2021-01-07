import request from "./request";
import api from "./api";
import ls from "src/utils/ls";

interface Services {
  [index: string]: any
}

const services: Services = {};

interface ApiOpts {
  name: string;
  url: string;
  method: string;
}

function createService(apiOpts: ApiOpts) {
  const { name, url, ...restOpts } = apiOpts;
  return ({
    headers = {
      accessToken: ls.get("accessToken")
    },
    postParams = '',
    ...options
  } = {}) => {
    // 开发环境打印调试信息
    // eslint-disable-next-line
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(`${name} ${new Date()}`);
    }

    const heads = headers || {};
    let urlTxt = url;
    if (postParams) {
      urlTxt += postParams;
    }

    return request({
      ...restOpts,
      headers: heads,
      url: urlTxt,
      ...options
    });
  };
}

for (const [key, value] of Object.entries(api)) {
  services[key] = createService(value);
}

export default services;
