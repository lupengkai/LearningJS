/**
 * Created by tage on 11/26/16.
 */
'use strict';

const Koa = require('koa');


const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');
const rest = require('./rest');



const app = new Koa();



//Node.js在全局变量process中定义了一个环境变量env.NODE_ENV
const isProduction = process.env.NODE_ENV === 'production';









app.use(async(ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime - start;
    ctx.response.set('X-Response-Time', `${execTime}`);
});

if (!isProduction) {//nginx 负责处理　不用调用之后的middleware
    let  staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}



app.use(rest.restify());//ctx bind rest()


app.use(bodyParser()); //解析post body

app.use(templating('view', { //给ctx 加上render()
    noCache: !isProduction,
    watch: !isProduction
}));





app.use(controller());


app.listen(3000);
console.log('app starter at port 3000...');