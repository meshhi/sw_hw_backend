const Koa = require('koa');
const cors = require('@koa/cors');
const serve = require('koa-static')
const path = require('path')
const fs = require('fs');
const app = new Koa();

app.use(serve(path.join(__dirname, '/static')))
app.use(cors());
app.use(async ctx => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  ctx.body = JSON.stringify({
    title: 'My title',
    content: 'Its some description for test request'
  });
});

app.listen(3000);