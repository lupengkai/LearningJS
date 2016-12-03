/**
 * Created by tage on 11/16/16.
 */
$.fn.highlight = function () {
    //this绑定为当前jQuery对象：
    this.css('backgroundColor', '#fffceb').css('color', '#d85030');
    return this;
}

$.fn.highlight = function (options) {
    // 合并默认值和用户设定值:
    var opts = $.extend({}, $.fn.highlight.defaults, options);
    this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
    return this;
}

// 设定默认值:
$.fn.highlight.defaults = {
    color: '#d85030',
    backgroundColor: '#fff8de'
}