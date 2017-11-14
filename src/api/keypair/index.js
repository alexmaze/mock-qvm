const Router = require("koa-router")
const data = require("./data")
const router = new Router()

router.get("/", ctx => {
  ctx.body = data.list
})

router.post("/", ctx => {
  ctx.body = data.create
})

module.exports = router
