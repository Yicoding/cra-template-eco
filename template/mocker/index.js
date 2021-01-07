const delay = require('mocker-api/lib/delay');
const data = require('./data')
const api = require('../src/services/api');

const mockdata = {
  ...data
};

// 默认接口结构
const defaultRes = {
  code: "0000",
  message: "成功"
};

/**
 * 创建接口mock
 * @param {Object} param 接口相关数据
 */
function createApi({ method = "POST", url = "", res = {} }) {
  const ret =
    typeof res === "function"
      ? (req, response) =>
        response.send({
          ...defaultRes,
          ...res(req, response)
        })
      : {
        ...defaultRes,
        ...res
      };

  return {
    [`${method.toUpperCase()} ${url}`]: ret
  };
}


// mock数据
let mocks = {};

for (const prop in mockdata) {
  const mockObj = createApi({
    ...api[prop],
    res: mockdata[prop]
  });

  mocks = { ...mocks, ...mockObj };
}

module.exports = delay(mocks, 1000);
