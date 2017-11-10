import { listAliyunAccount, getBasicInfoForAccount } from "./aas"

// list accounts
listAliyunAccount(10, undefined).then(
  res => {
    formatLog(res.data)
  },
  err => {
    console.log(err)
  }
)

// getBasicInfoForAccount("qvmcloudifuzp3b13h@aliyun.com").then(
//   res => {
//     formatLog(res.data)
//   },
//   err => {
//     console.log(err)
//   }
// )

function formatLog(data: any) {
  console.log(JSON.stringify(data, null, 2))
}
