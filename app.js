const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  ctx.body = 'Hello World';
});

app.listen(3000);