/**
 * Created by tage on 9/26/16.
 */
var now = new Date();

now;
now.getFullYear();
now.getMonth();
now.getDate();
mow.getMilliseconds();
now.getTime();


var d = new Date(2015, 5, 19, 20, 15, 30, 123);//返回Dated对象
var t = Date.parse('2015-06-24T19:49:22.875+08:00');//返回时间戳
var date = new Date(t);

date.toLocaleDateString();
date.toUTCString();