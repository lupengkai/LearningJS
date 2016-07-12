/**
 * Created by tage on 7/12/16.
 */
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;

    }
};

xiaoming.age;
xiaoming.age();

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}


var xiaohong = {
    name: '小红',
    birth: 1995,
    age:getAge
};

xiaohong.age();
getAge();//this指向window

var fn = xiaohong.age; fn(); //NaN 必须obj.***调用

'use strict';
//fn();//strict模式下 ECMA规定 this 指向undefined error

//strict 嵌套函数this指向undefined， 非strict 指向window
var that = this; //在嵌套函数外先捕获this


getAge.apply(xiaohong, []);//第一个参数是对象，第二个接受参数Array

Math.max.apply(null, [3, 4, 5]);//参数打包成Array
Math.max.call(null, 3, 4, 5);//参数按顺序传入

//装饰器 动态改变函数行为

var oldParseInt = parseInt;
var count = 0;
window.parseInt = function () {
count ++;
    return oldParseInt.apply(null,arguments);
};

