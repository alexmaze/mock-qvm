const client = require("../../lib/client")
const Router = require("koa-router")

const data = require("./data")

const router = new Router()

router.get("/", async ctx => {
  ctx.body = data.list
})

module.exports = router
