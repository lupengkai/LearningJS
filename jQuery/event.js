/**
 * Created by tage on 11/16/16.
 */
/* HTML:
 *
 * <a id="test-link" href="#0">点我试试</a>
 *
 */

var a = $('#test-link');
a.on('click', function () {
    alert('Hello!');
})
//on 绑定事件，　传入事件名称和处理函数

a.click(function () {
    alert('Hello!');

});

//初始化代码必须放到document对象的ready事件中，保证DOM已完成初始化

$(document).on('ready', function () {
    $('#testForm').on('submit', function () {
        alert('submit!');
    });
});

$(document).ready(function () {
    $('#test-form').submit(function () {
        alert('submit');

    });
});


$(function () {

});

//按顺序执行
$(function () {
    console.log('init A...');

});
$(function () {
    console.log('init B...');

});
$(function () {
    console.log('init C...');

});

$(function () {
    $('#testMouseMoveDiv').onmousemove(function (e) {
        $('testMouseMoveSpan').text('pageX=' + e.pageX + '.pageY='+ e.pageY);
    });
});

a.click(hello);
a.off('click', hello);
a.off('click');
a.off();

//代码改变，不会触动改变事件

var input = $('#test-input');
input.val('change it!');
input.change(); //input.trigger('change');
//有些JavaScript代码只有在用户触发下才能执行，例如，window.open()函数：