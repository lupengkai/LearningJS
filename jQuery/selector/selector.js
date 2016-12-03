/**
 * Created by tage on 11/15/16.
 */

var div = $('#abc');
var divDom = div.get(0);
var another = $(divDom);

var ps = $('p');//tag name
ps.length;

var a = $('.red');//class

var q = $('.red.green');//多个class

//property
var email = $('[name=email]');
var passwordInput = $('[type=password]');
var a = $['[items="a B"]']; //特殊字符和空格　双引号

var icons = $('[name^=icon]');
var icons = $('[name$=with]');

var icon = $('[class^=icon-]');

//组合　与
var emailInput = $('input[name=email]');
var tr = $('tr.red');

//多项　‘，’ 或
$('p,div');
$('p.red,p.green');