const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
    const { header } = ctx;
    const eventType = header['x-github-event'];
    const payload = ctx.request.body.payload;

    console.log('header: ', header)
    console.log('payload:', payload)
    console.log('keys: ', Object.keys(JSON.parse(payload)))
    // console.log(`ctx.header`, ctx.header);
    // console.log('ctx.body', ctx.request.body);
    // ctx.body = 'Hello Koa';
});

app.listen(3000, () => {
    console.log('app start');
});
