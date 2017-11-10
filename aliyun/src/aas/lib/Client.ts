import * as kitx from "kitx"
import axios from "axios"

// axios.interceptors.request.use(value => {
//   console.log(value)
//   return value
// })

const API_ENTRY = "https://aas.aliyuncs.com"
const AK = "LTAIHWHyMgUhRD28"
const SK = "BnpLZrnfC2WnNYwdCxQua246Lv9ifi"

export interface IRequestParam {
  Action: string
}

class Client {
  public get(params: object) {
    return axios.get(API_ENTRY, {
      params: this.buildRequestParams("GET", params)
    })
  }

  public buildRequestParams(method: string, params: object) {
    const allParams = {
      ...this.newPublicParams(),
      ...params
    }

    const keysToSign = Object.keys(allParams)
      .sort((a, b) => (a > b ? 1 : -1))
      .filter(i => i != "Signature")
      .filter(i => allParams[i] != null)

    const canonicalizedQueryString = keysToSign
      .map(key => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(
          allParams[key]
        )}`
      })
      .join("&")

    const stringToSign =
      method +
      "&" +
      encodeURIComponent("/") +
      "&" +
      encodeURIComponent(canonicalizedQueryString)

    return {
      ...allParams,
      Signature: this.signature(stringToSign)
    }
  }

  private signature(stringToSign: string) {
    const utf8Buff = Buffer.from(stringToSign, "utf8")
    return kitx.sha1(utf8Buff, SK + "&", "base64")
  }

  private newPublicParams() {
    const timestamp = new Date().toISOString().substr(0, 19) + "Z"
    return {
      Format: "JSON",
      Version: "2015-07-01",
      AccessKeyId: AK,
      Signature: "",
      SignatureMethod: "HMAC-SHA1",
      Timestamp: timestamp,
      SignatureVersion: "1.0",
      SignatureNonce: (Math.random() * 1000000).toFixed(0)
    }
  }
}

export const client = new Client()
