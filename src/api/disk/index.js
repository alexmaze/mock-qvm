const Router = require("koa-router")
const utils = require("../../utils")

const router = new Router()
const data = require("./data.js")

router.get("/", async (ctx, next) => {
  await utils.sleep(0.5)
  ctx.body = data.list
  // ctx.status = 500
})

router.get("/:id", async (ctx, next) => {
  await utils.sleep(0.5)
  ctx.body = {
    data: data.list.data[0]
  }
})

module.exports = router
