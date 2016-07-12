'use strict';
var x = 1;
var x = 2;

'Hello, world';
//
/**/
//区分大小写

//Number
123;
0.456
1.2345e3;
-99
NaN;
Infinity;
0x10;
"abc";
'abc';
true;
false;
2 > 1;
2 >= 3;
true && true;
false || false;
!true;
false == 0;//true 自动转型
false === 0;//false 不自动转型，始终使用===
NaN === NaN; //false
isNaN(NaN);//true

1 / 3 === (1 - 2 / 3);//电脑计算的误差
null;
new Array(1, 2, 3);
var arr = [1, 2, 3.14, 'Hello', null, true];
arr[0]
arr[5]
//alert(arr[6])

var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    hasCar: true,
    zipcode: null
};

person.name;
person.zipcode;

var a;
var $b = 1;
var s_007 = '007';
var Answer = true;
var t = null;

var a = 123;
a = 'ABC';

var x = 10 ;
x += 2;
//alert(x);

//i=10;//全局变量
//var i =20;//同一个页面的不同js文件中，如果都不用var，将造成变量相互影响
//alert(i);
var LL=10;
//alert(LL);


"I'm OK";
'T\'m\"OK\"!';
'\x41';
'\u4e2d\u6587';
/*alert(`这是
一个
多行
字符串`);*/

var s = 'Hello, world';
s.length
var s = 'Hello, world';
s[0];
s[23];
var s = 'test'; 
s[0] = 'X'
alert(s);//s仍然为test
s.toUpperCase();
s.toLowerCase();
s.indexOf('e');//1
s.indexOf('z');//-1

s.subString(0,2);//从0开始不包括2;
s.substring(3);//3到最后