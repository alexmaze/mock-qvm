const Router = require("koa-router")
const data = require("./data")
const router = new Router()
const utils = require("../../utils")

router.get("/", async (ctx, next) => {
  await utils.sleep(0.5)
  ctx.body = data.list
})

router.get("/:id", async (ctx, next) => {
  await utils.sleep(0.5)
  ctx.body = {
    data: data.detail
  }
})

router.post("/", async (ctx, next) => {
  await utils.sleep(0.5)
  ctx.body = data.list.data[0]
})

module.exports = router
