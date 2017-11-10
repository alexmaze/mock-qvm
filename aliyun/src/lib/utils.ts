import { HmacSHA1 } from "crypto-js"
import * as kitx from "kitx"

export const API_ENTRY = "https://aas.aliyuncs.com"
const AK = "LTAIHWHyMgUhRD28"
const SK = "BnpLZrnfC2WnNYwdCxQua246Lv9ifi"

function getPublicParams() {
  const publicParams = {
    Format: "JSON",
    Version: "2015-07-01",
    AccessKeyId: AK,
    Signature: "",
    SignatureMethod: "HMAC-SHA1",
    Timestamp: getTimestamp(),
    SignatureVersion: "1.0",
    SignatureNonce: (Math.random() * 1000000).toFixed(0)
  }
  return publicParams
}

function getTimestamp() {
  let ret = new Date().toISOString()
  return ret.substr(0, 19) + "Z"
}

type METHOD = "GET" | "PUT" | "POST" | "DELETE"

export function buildRequestParams(method: METHOD, params: any) {
  const allParams = {
    ...getPublicParams(),
    ...params
  }

  const keysToSign = Object.keys(allParams)
    .sort((a, b) => (a > b ? 1 : -1))
    .filter(i => i != "Signature")

  const canonicalizedQueryString = keysToSign
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(allParams[key])}`
    })
    .join("&")

  const stringToSign =
    method +
    "&" +
    encodeURIComponent("/") +
    "&" +
    encodeURIComponent(canonicalizedQueryString)

  console.log(stringToSign)

  const signature = sign(stringToSign)

  return {
    ...allParams,
    Signature: signature
  }
}

function sign(stringToSign) {
  const utf8Buff = Buffer.from(stringToSign, "utf8")

  return kitx.sha1(utf8Buff, SK + "&", "base64")

  // const signature = HmacSHA1(stringToSign, cipher).toString()
}
