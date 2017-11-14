import { Client } from "./lib/Client"

const client = new Client({
  entry: "http://ecs.aliyuncs.com/",
  version: "2014-05-26",
  ak: "LTAIHWHyMgUhRD28",
  sk: "BnpLZrnfC2WnNYwdCxQua246Lv9ifi"
})

client
  .call({
    Action: "DescribeRegions",
    RegionId: "cn-qingdao",
    OwnerAccount: "qvmcloudifuzp3b13h@aliyun.com"
  })
  .then(
    res => {
      console.log(res.data)
    },
    err => {
      console.log(err)
    }
  )
