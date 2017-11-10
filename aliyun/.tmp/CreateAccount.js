"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const API_ENTRY = "https://ass.aliyuncs.com";
const AK = "LTAIHWHyMgUhRD28";
const SK = "BnpLZrnfC2WnNYwdCxQua246Lv9ifi";
function getPublicParams() {
    const publicParams = {
        Format: "JSON",
        Version: "2015-07-01",
        AccessKeyId: AK,
        Signature: "",
        SignatureMethod: "HMAC-SHA1",
        Timestamp: new Date().toISOString(),
        SignatureVersion: "1.0",
        SignatureNonce: (Math.random() * 1000000).toFixed(0)
    };
    return publicParams;
}
console.log(getPublicParams);
//# sourceMappingURL=CreateAccount.js.map