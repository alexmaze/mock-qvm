const Koa = require("koa")
const Router = require("koa-router")
const cors = require("@koa/cors")
const fs = require("fs")
const path = require("path")
const koaBody = require("koa-body")

const app = new Koa()
const router = new Router()

app.use(cors())
app.use(koaBody())

// log middleware
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`)
})

// regist routes
const files = fs.readdirSync(path.join(__dirname, "./api"))
router.prefix("/v1")
files.forEach(file => {
  router.use(`/${file}`, require(`./api/${file}`).routes())
})

app.use(router.routes()).listen(9090)
console.log("server running @:9090")
