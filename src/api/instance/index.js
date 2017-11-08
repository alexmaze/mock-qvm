const Router = require("koa-router")

const router = new Router()

router.get("/", ctx => {
  ctx.body = require("./list.json")
})

module.exports = router
