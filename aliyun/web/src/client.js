import axios from "axios"
import createHmac from "create-hmac"

const API_ENTRY = "https://aas.aliyuncs.com"

class Client {
  AK = ""
  SK = ""

  get(ak, sk, params) {
    this.AK = ak
    this.SK = sk
    return axios.get(API_ENTRY, {
      params: this.buildRequestParams("GET", params)
    })
  }

  buildRequestParams(method, params) {
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

  signature(stringToSign) {
    // const utf8Buff = Buffer.from(stringToSign, "utf8")
    // return kitx.sha1(utf8Buff, SK + "&", "base64")
    const hmac = createHmac("sha1", this.SK + "&")
    return hmac.update(Buffer.from(stringToSign, "utf8")).digest("base64")
  }

  newPublicParams() {
    const timestamp = new Date().toISOString().substr(0, 19) + "Z"
    return {
      Format: "JSON",
      Version: "2015-07-01",
      AccessKeyId: this.AK,
      Signature: "",
      SignatureMethod: "HMAC-SHA1",
      Timestamp: timestamp,
      SignatureVersion: "1.0",
      SignatureNonce: (Math.random() * 1000000).toFixed(0)
    }
  }
}

export const client = new Client()
