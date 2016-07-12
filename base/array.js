/**
 * Created by tage on 7/11/16.
 */
var arr = [1, 3, 3.14, 'Hello', null, true];
arr.length;//6
var arr = [1, 3, 4];
arr.length = 6;
arr;//[1,3,4,undefined,undefined, undefined]

arr.length = 2;
arr;//变为[1,3]

arr[1] = 10;
arr;//[1,10]
alert(arr);

var arr = [1, 2, 3];
arr[5] = 'x';
arr;//arr变为[1,2,3,undefined, undefined, x]

arr.indexOf(1);
arr.indexOf('1')//-1

arr.slice(0, 3);//0开始不包括3
arr.slice(3);//3开始
arr.slice();//全部

var copy = arr.slice()
aCopy === arr; //false 所有 值拷贝

var arr = [1, 2];
arr.push('A', 'B');
arr;
arr.pop();
[1, 2, 'A']
arr;
arr.pop();
arr.pop();
arr.pop();
arr;
[]
arr.pop(); //不报错，返回undefined
arr;//[]

arr.unshift('A', 'B');//头部添加['A', 'B']
arr.shift();//['B']
arr.shift();
arr.shift();//不报错，返回undefined
arr;//[]

var arr = ['b', 'c', 'a']
arr.sort();
arr;

var arr = ['one', 'two', 'three']
arr.reverse();
arr;

arr.splice(1, 2, 'four', 'five');//从指定索引开始删除若干元素，再从该位置添加若干元素

var added = arr.concat([1, 2, 3]);//没有修改当前Array， 而是返回了一个新的Array
var arr = ['A', 'B', 'C', 1, 2, 4];//连接字符串
arr.join('-')

var arr = [[1, 2, 3], [400, 500, 600], '-'];


