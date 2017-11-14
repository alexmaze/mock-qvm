const Core = require("@alicloud/pop-core")

// 使用测试帐号：1681310282706497
const client = new Core({
  accessKeyId: "LTAIlPUrzdFrZ4sL",
  secretAccessKey: "yDONVLY4GUIeAppaKuXVs88j9s4kN7",
  endpoint: "http://ecs.aliyuncs.com",
  apiVersion: "2014-05-26"
})

module.exports = client
