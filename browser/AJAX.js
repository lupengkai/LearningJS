/**
 * Created by tage on 11/12/16.
 */
'use strict';
function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;

}

function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

var request = new XMLHttpRequest();

request.onreadystatechange = function () { //回调函数
    if (request.readyState === 4) {
        if (request.status === 200) {
            return success(request.responseText); //注意返回类型
        } else {
            return fail(request.status)
        }
    } else {
        //http请求还在继续...
    }

}

request.open('GET', '/api/categories');
request.send();

alert('请求已发送，请等待响应...');


var request = new ActiveXObject('Microsoft.XMLHTTP'); // 新建Microsoft.XMLHTTP对象

var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP');
}
var json = {
        "0000001": {
            "code": "0000001",
            "percent": 0.007808,
            "askvol1": 0,
            "askvol3": 0,
            "askvol2": 0,
            "askvol5": 0,
            "askvol4": 0,
            "price": 3196.04,
            "open": 3169.4,
            "bid5": 0,
            "bid4": 0,
            "bid3": 0,
            "bid2": 0,
            "bid1": 0,
            "high": 3202.74,
            "low": 3166.07,
            "updown": 24.76,
            "type": "SH",
            "bidvol1": 0,
            "status": 0,
            "bidvol3": 0,
            "bidvol2": 0,
            "symbol": "000001",
            "update": "2016/11/11 15:59:56",
            "bidvol5": 0,
            "bidvol4": 0,
            "volume": 31085457900,
            "ask5": 0,
            "ask4": 0,
            "ask1": 0,
            "name": "\u4e0a\u8bc1\u6307\u6570",
            "ask3": 0,
            "ask2": 0,
            "arrow": "\u2191",
            "time": "2016/11/11 15:59:51",
            "yestclose": 3171.28,
            "turnover": 343773951274
        },


        "1399001": {
            "code": "1399001",
            "percent": 0.005219,
            "high": 10878.139,
            "askvol3": 0,
            "askvol2": 0,
            "askvol5": 0,
            "askvol4": 0,
            "price": 10878.139,
            "open": 10823.933,
            "bid5": 0.0,
            "bid4": 0.0,
            "bid3": 0.0,
            "bid2": 0.0,
            "bid1": 0.0,
            "low": 10792.83,
            "updown": 56.476,
            "type": "SZ",
            "bidvol1": 0,
            "status": 0,
            "bidvol3": 0,
            "bidvol2": 0,
            "symbol": "399001",
            "update": "2016/11/11 15:59:46",
            "bidvol5": 0,
            "bidvol4": 0,
            "volume": 40001586827,
            "askvol1": 0,
            "ask5": 0.0,
            "ask4": 0.0,
            "ask1": 0.0,
            "name": "\u6df1\u8bc1\u6210\u6307",
            "ask3": 0.0,
            "ask2": 0.0,
            "arrow": "\u2191",
            "time": "2016/11/11 15:59:45",
            "yestclose": 10821.663,
            "turnover": 426331910052.312
        }
    };


function refershPrice(data) {
    var p = document.getElementById('test-jsonp');
    p.innerHTML = data['0000001'].name + ': ' +
            data['0000001'].price
}

function getPrice() {
    var
        js = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    js.src = 'http://http://api.money.126.net/data/feed/0000001,1399001?callback=refershPrice';
    head.appendChild(js);
}

// <button type="button" onclick="getPrice()">刷新</button>
