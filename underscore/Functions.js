/**
 * Created by tage on 11/16/16.
 */
'use strict';

var log = console.log;
// 调用call并传入console对象作为this:
log.call(console, 'Hello, world!');

var log = _.bind(console.log, console);
log('Hello, world!');


var pow2N = _.partial(Math.pow, 2);
pow2N(3); // 8
pow2N(5); // 32
pow2N(10); // 1024

var cube = _.partial(Math.pow, _, 3);
cube(3); // 27
cube(5); // 125
cube(10); // 1000


var factorial = _.memoize(function(n) {
    console.log('start calculate ' + n + '!...');
    var s = 1, i = n;
    while (i > 1) {
        s = s * i;
        i --;
    }
    console.log(n + '! = ' + s);
    return s;
});

// 第一次调用:
factorial(10); // 3628800
// 注意控制台输出:
// start calculate 10!...
// 10! = 3628800

// 第二次调用:
factorial(10); // 3628800
// 控制台没有输出

var register = _.once(function () {
    alert('Register ok!');
});
_.delay(alert, 2000);

var log = _.bind(console.log, console);
_.delay(log, 2000, 'Hello,', 'world!');