/**
 * Created by tage on 11/26/16.
 */
'use strict';

const Koa = require('koa');


const bodyParser = require('koa-bodyparser');

const controller = require('./controller');



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

app.use(bodyParser());


app.use(controller());


app.listen(3000);
console.log('app starter at port 3000...');