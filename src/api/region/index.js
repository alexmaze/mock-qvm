const client = require("../../lib/client")
const Router = require("koa-router")

const data = require("./data")

const router = new Router()

router.get("/", async ctx => {
  // let res
  // try {
  //   res = await client.request("DescribeRegions", {})
  // } catch (e) {
  //   res = e
  // }
  // ctx.body = res
  ctx.body = data.list
})

module.exports = router
