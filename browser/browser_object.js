/**
 * Created by tage on 11/8/16.
 */
alert(window.innerWidth + ' ' + window.innerHeight);
alert(window.outerWidth + ' ' + window.outerHeight);

alert(
    'appName:' + navigator.appName + '\n' +
        'appVersion:' + navigator.appVersion + '\n' +
        'language:' + navigator.language + '\n' +
        'platform:' + navigator.platform + '\n' +
        'userAgent:' + navigator.userAgent
);

var width = window.innerWidth || document.body.clientWidth;

alert(screen.width + ' x ' + screen.height + ' ' + screen.colorDepth)


location.href;//http://www.example.com:8080/path/index.html?a=1&b=2#TOP
location.protocol;//http
location.host;//www.example.com
location.port;// /path/index.html
location.search;// ?a=1&b=2
location.hash;//TOP

location.assign()
location.reload()

'use strict'
if (confirm('重新加载当前页' + location.href + '?')) {
    location.reload();
} else {
    location.assign('/discuss');
}

document.title = 'javascript'

var menu = document.getElementById('drink-menu');
var drinks = document.getElementsByTagName('dt');
var i, s, menu, drinks;

menu = document.getElementsByTagName('dt');
s = '提供的饮料有:';
for (i=0; i< drinks.length;i++) {
    s = s+ drinks[i].innerHTML + ',';
}
alert(s);

documnent.cookie;

