const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
    console.log(`ctx.header`, ctx.header);
    ctx.body = 'Hello Koa';
});

app.listen(3000, () => {
    console.log('app start');
});
