const Router = require("koa-router")
const utils = require("../../utils")

const router = new Router()

const data = require("./data")

router.get("/", async (ctx, next) => {
  await utils.sleep(0.5)
  ctx.body = data.list
})

module.exports = router
