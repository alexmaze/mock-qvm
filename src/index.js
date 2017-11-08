const Koa = require("koa")
const Router = require("koa-router")

const app = new Koa()
const router = new Router()

// log middleware
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// regist routes
router.use("/instance", require("./apis/instance").routes())

app.use(router.routes()).listen(3000)
console.log("server running @:3000")
