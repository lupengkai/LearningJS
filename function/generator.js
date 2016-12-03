/**
 *
 * Created by tage on 9/25/16.
 */

function* foo(x) {
    yield x+1;
    yield x+2;
    return x+3;
}

function* fib(max) {
    var
        t,
        a=0,
        b=1,
        n=1;
    while (n<max) {
        yield a;
        t = a+b;
        a = b;
        b=t;
        n ++;
    }
    return a;
}

var f = fib(5);
f.next();

for (var x of fib(5)) {
    console.log(x);
}
//看上去就像一个可以记住执行状态的函数

