/**
 * Created by tage on 7/11/16.
 */
var m = new Map([['Michael', 95], ['Bob', 75]]);
m.get('Michael');

var m = new Map();
m.set('Adam', 67);
m.get('Adam');
m.has('Adam');
m.delete('Adam');
m.get('Adam');//undefined

//后面值会把前面值冲掉

var s1 = new Set();
var s2 = new Set([1, 2, 3]);

s2.add(4);
s2.delete(4);