const Router = require("koa-router")
const utils = require("../../utils")

const router = new Router()

const data = require("./data")

router.get("/instance/family", async (ctx, next) => {
  await utils.sleep(0.5)
  ctx.body = data.inst_family
})

router.get("/instance/family/:id", async (ctx, next) => {
  await utils.sleep(0.5)
  ctx.body = data.inst_type
})

module.exports = router
