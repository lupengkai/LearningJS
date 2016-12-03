/**
 * Created by tage on 11/26/16.
 */
'use strict';

const Koa = require('koa');

const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

const app = new Koa();

/*app.use(async (ctx, next) => {
    await next();//协程　责任链　函数之间来回切换
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});*/
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});



router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Hello, Index!</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;

});

router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`siginin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});


app.use(bodyParser());
app.use(router.routes());


app.listen(3000);
console.log('app starter at port 3000...');