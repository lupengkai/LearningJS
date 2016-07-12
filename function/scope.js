/**
 * Created by tage on 7/12/16.
 */
//内部可以访问外部
//外部不能访问内部
//同名变量，内部屏蔽外部

//变量提升, 将变量“提升”到函数顶部

function foo() {
    var x = 'Hello, ' + y;
    alert(x);
    var y = 'Bob';
}

foo();

function foo() {
    var
        x = 1,
        y = x + 1,
        z, i; //var声明所有内部用到的变量
}


var course = 'Hello!';//全局作用域绑定到window属性
alert(window.course);
window.alert('调用alert（）');//alert也是windows的一个变量
var old_alert = widow.alert;

widow.alert = function () {
}

var MYAPP = {};//唯一的全局变量MYAPP, 防止冲突
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

MYAPP.foo = function () {
    return 'foo';

};

//var在函数内部作用域是整个函数，不是块级作用域
function  foo() {
    var sum= 0;
    for (let i = 0; i< 100; i++) {
        sum += i;
    }
    //i +=1; error

}

const PI = 3.14;

