/**
 * Created by tage on 11/15/16.
 */
var ul = $('ul.lang');
var dy = ul.find('.dy');
var dy = ul.find('#swift');
var dy = ul.find('[name=haskell]');

var swf = $('#swift');
var parent = swf.parent();
var a = swf.parent('div.red');

swf.next();
swf.next('[name=haskell]');

swf.prev();
swf.prev('.js');

var langs = $('ul.lang li');
langs.filters('.dy');
//注意函数内部的this被绑定为DOM对象
langs.filter(function () {
    return this.innerHTML.indexOf('S') === 0; // 返回S开头的节点
}); //

var arr = langs.map(function () {
    return this.innerHTML;
}).get(); // 用get()拿到包含string的Array：['JavaScript', 'Python', 'Swift', 'Scheme', 'Haskell']

var js = langs.first();
var haskell = langs.last();
var sub = langs.slice(2, 4);

