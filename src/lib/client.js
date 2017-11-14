const Core = require("@alicloud/pop-core")

// 使用测试帐号：1681310282706497
const client = new Core({
  accessKeyId: "LTAIHWHyMgUhRD28",
  secretAccessKey: "BnpLZrnfC2WnNYwdCxQua246Lv9ifi",
  endpoint: "http://ecs.aliyuncs.com",
  apiVersion: "2014-05-26"
})

module.exports = client
