const Router = require("koa-router")
const utils = require("../../utils")

const router = new Router()

router.get("/", async (ctx, next) => {
  await utils.sleep(0.5)
  let data = require("./list.json")
  ctx.body = data
})

module.exports = router
