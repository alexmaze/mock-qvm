import * as kitx from "kitx"
import axios from "axios"

// axios.interceptors.request.use(value => {
//   console.log(value)
//   return value
// })

export interface IRequestParam {
  Action: string
}

export class Client {
  entry: string
  version: string
  ak: string
  sk: string

  constructor(param: {
    entry: string
    version: string
    ak: string
    sk: string
  }) {
    this.entry = param.entry
    this.version = param.version
    this.ak = param.ak
    this.sk = param.sk
  }

  public call(params: object) {
    return axios.get(this.entry, {
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
    return kitx.sha1(utf8Buff, this.sk + "&", "base64")
  }

  private newPublicParams() {
    const timestamp = new Date().toISOString().substr(0, 19) + "Z"
    return {
      Format: "JSON",
      Version: this.version,
      AccessKeyId: this.ak,
      Signature: "",
      SignatureMethod: "HMAC-SHA1",
      Timestamp: timestamp,
      SignatureVersion: "1.0",
      SignatureNonce: (Math.random() * 1000000).toFixed(0)
    }
  }
}
