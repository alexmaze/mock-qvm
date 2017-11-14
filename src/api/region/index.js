const client = require("../../lib/client")
const Router = require("koa-router")

const router = new Router()

router.get("/", async ctx => {
  let res
  try {
    res = await client.request("DescribeRegions", {})
  } catch (e) {
    res = e
  }
  ctx.body = res
})

module.exports = router
