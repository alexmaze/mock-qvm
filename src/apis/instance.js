const Router = require("koa-router")

const router = new Router()

router.get("/", ctx => {
  ctx.body = "instance list"
})

module.exports = router
