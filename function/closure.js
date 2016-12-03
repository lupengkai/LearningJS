/**
 * Created by tage on 9/22/16.
 */
function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;

        })
    };
    return sum;
}

var f = lazy_sum([1, 2, 3, 4]);
f();

var f2 = lazy_sum([1, 2, 3, 4]);

//f != f2

function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(
            (function (n) {
                return function () {
                    return n * n;

                }
            })(i)//此处执行
        );
    }
}

'use strict';
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;

        }
    };

}

function make_pow() {
    return function (x) {
        return Math.pow(x, n);
    }
}

var pow2 = make_pow(2); //函数模板　生成函数


