/**
 * Created by tage on 7/12/16.
 */
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

//如果没有return语句，执行完毕结果是undefined
var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

//按顺序传参数，多或少都没事

abs(1, 2, 4);
abs();


function abs(x) {
    if (typeof x !== 'number') {//类型检查
        throw 'Not a number';
    }


    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

 function foo(x) {//arguments
     alert(x);
     for (var i=0; i<arguments.length; i++) {
         alert(arguments[i]);
     }
 }

function foo(a,b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

//return后{ 不换行