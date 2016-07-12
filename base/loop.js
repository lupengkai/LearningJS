/**
 * Created by tage on 7/11/16.
 */
var x = 0;
for (var i = 1; i <= 100; i++) {
    x += i;
}


var o = {
    name: 'jack',
    age: 20,
    city: 'Beijing'
};

for (var key in o) {
    alert(key);//'name', 'age', 'city'
}

for (var key in o) {
    if (o.hasOwnProperty(key)) {//过滤继承属性
        // alert(o.key) ;错误
        alert(o[key]);
        alert(key);//'name', 'age', 'city'
    }
}

for (var key in o) {
    if (o.hasOwnProperty(key)) {
        alert(key); // 'name', 'age', 'city'
    }
}

var a = ['A', 'B', 'C'];
for (var i in a) {
    alert(i);
    alert(a[i])
}

for (var i = 0; i < arr.length; i++) {
    alert(arr[i])
}

var n = 10;
while (n > 0) {
    n--;
}

do {
    n++;
} while (n <= 100) ;//至少执行一次



