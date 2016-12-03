/**
 * Created by tage on 11/13/16.
 */
function callback() {
    console.log('Done');
}

console.log('before seTimeout()');
setTimeout(callback, 100);

console.log('after setTimeout()');

/*
before setTimeout()
after setTimeout()
(等待1秒后)
Done*/

function test(resolve, reject) {
    var timeOut = Math.random() *2;
    log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()');
            resolve('200 OK');
        }
        else {
            log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }

    }, timeOut * 1000)
}

var p1 = new Promise(test);
var p2 = p1.then(function (result) {
    console.log('success: ' + result);

});

var p3 = p2.catch(function (reason) {
    console.log('fail: ' + reason);

});

new Promise(test).then(function (result) {
    console.log('success: ' + result);

}).catch(function (reason) {
    console.log('fail: ' + reason);

});


'use strict';

var logging = documnet.getElementById('test-promist-log');
while(logging.children.length > 1) {
    logging.removeChild(logging.childre[logging.children.length -1]);
}
function log(s) {
    var p = document.createElement('p');
    p.innerHTML = s;
    logging.appendChild(p);

}



function multiply(input) {
    return new Promise(function (resolve,reject) {
        log('calculating ' + input + ' x ' + input + '...');
        setTimeout(resolve, 500, input * input);
    })
}

function add(input) {
    return new Promise(function (resolve,reject) {
        log('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input + input);
    })
}

var p = new Promise(function (resolve, reject) {
    log('start new Promise...');
    resolve(123);
});

p.then(multiply).then(add).then(multiply).then(function (result) {
    log('Got value: ' + result);

});

function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
        request.onreadystatechange = function () {
            if(request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    })
}
var log = documnet.getElementById('test-promise-ajax-result');
var p = ajax('GET', '/api/categories');
p.then(function (text) {
    log.innerText = text;
}).catch(function (status) {
    log.innerText = 'ERROR: ' + status;
});

var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});

Promise.all([p1, p2]), then(function (results) {
    console.log(results);
});


Promise.race([p1, p2]).then(function (result) {
    console.log(result);
});


