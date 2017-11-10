import { client } from "./aas/lib/Client"

const params = buildReqParams(process.argv)
client.get(params).then(
  res => {
    formatLog(res.data)
  },
  err => {
    console.log(err)
  }
)

function buildReqParams(args: string[]) {
  const req = {}
  for (let i = 0; i < args.length; i++) {
    if (args[i].indexOf("--") == 0) {
      req[args[i].substr(2)] = args[i + 1]
      i++
    }
  }
  return req
}

function formatLog(data: any) {
  console.log(JSON.stringify(data, null, 2))
}
