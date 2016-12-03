/**
 * Created by tage on 11/16/16.
 */
'use strict';
function ajaxLog(s) {
    var txt = $('#test-response-text');
    txt.val(txt.val() + '\n' + s);
}

$('test-response-text').val('');

var jqxhr = $.ajax('/api/categories', {
    dataType: 'json'
}).done(function (data) {
    ajaxLog('success: ' + JSON.stringify(data))
}).fail(function (xhr, status) {
    ajaxLog('fail: ' + xhr.status + ', reasion: ' + status);
}).always(function () {
    ajaxLog('complete')
});

var jqxhr = $.get('/path/to/resource', {
    name: 'Bob Lee',
    check: 1
});

var jqxhr = $.post('/path/to/resource', {
    name: 'Bob Lee',
    check: 1
});

var jqxhr = $.getJSON('/path/to/resource', {
    name:'Bob Lee',
    check:1
}).done(function (data) {
    
})

