const client = require("../../lib/client")
const Router = require("koa-router")
const utils = require("../../utils")
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
  await utils.sleep(0.5)
  ctx.body = data.list
})

router.get("/:id/zone", async ctx => {
  await utils.sleep(0.5)
  ctx.body = data.zoneList
})

module.exports = router
