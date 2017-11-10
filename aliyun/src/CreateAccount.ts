import * as https from "https"
import * as querystring from "querystring"

import { buildRequestParams, API_ENTRY } from "./utils"

// 构造参数
const params = {
  Action: "CreateAliyunAccount"
  // AliyunId: ""
}

const req = buildRequestParams("GET", params)

const querystr = querystring.stringify(req)
const url = API_ENTRY + "?" + querystr
console.log(url)
