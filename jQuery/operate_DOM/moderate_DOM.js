/**
 * Created by tage on 11/16/16.
 */
var ul = $('#test-div>');
ul.append('<li><span>Haskell</span></li>');

var ps = document.createElement('li');
ps.innerHTML = '<span>Pascal</span>';

ul.append(ps);

ul.append($('scheme'));
//相同节点,append可以移动节点

ul.append(function (index, html) {
    return '<li><span>Language - ' + index + '</span></li>>';
});
ul.prepend(ps);

var js = $('#test-div>ul>li:first-child');
js.after('<li><span>Lua</span></li>');
js.before();//同级之间

var li = $('#test-div>ul>li');
li.remove();//批处理
