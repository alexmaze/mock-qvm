const Koa = require("koa")
const Router = require("koa-router")
const cors = require("@koa/cors")

const app = new Koa()
const router = new Router()

app.use(cors())

// log middleware
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// regist routes
router
  .prefix("/api")
  .use("/instance", require("./api/instance").routes())
  .use("/region", require("./api/region").routes())

app.use(router.routes()).listen(3000)
console.log("server running @:3000")
