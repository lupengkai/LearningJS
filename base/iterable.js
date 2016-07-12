/**
 * Created by tage on 7/11/16.
 */
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) {
    alert(x)
}
for (var x of s) {
    alert(x)
}
for (var x of m) {
    alert(x[0] + '=' + x[1])
}

var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    alert(element);

});

s.forEach(function (element, sameElement, set) {
    alert(element);

});

m.forEach(function (value, key, map) {
    alert(value)
});

a.forEach(function (element) {
    alert(element)
});