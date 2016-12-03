/**
 * Created by tage on 11/16/16.
 */
'use strict';
//underscore为集合类对象提供了一致的接口。集合类是指Array和Object，暂不支持Map和Set。

var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};

var upper = _.mapObject(obj, function (value, key) {
    return value;
});

var upper = _.map(obj, function (value, key) {
    return value;
});
JSON.stringify(upper);
_.every([1, 4, 7, -3, -9], (x) => x > 0); // false
// 至少一个元素大于0？
_.some([1, 4, 7, -3, -9], (x) => x > 0); // true

var arr = [3, 5, 7, 9];
_.max(arr); // 9
_.min(arr);

var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
var groups = _.groupBy(scores, function (x) {
    if (x < 60) {
        return 'C';
    } else if (x < 80) {
        return 'B';
    } else {
        return 'A';
    }
});
// 结果:
// {
//   A: [81, 91, 88, 99],
//   B: [75, 77, 66, 72],
//   C: [20, 40, 59]
// }
_.shuffle([1, 2, 3, 4, 5, 6]); // [3, 5, 4, 6, 2, 1]
_.sample([1, 2, 3, 4, 5, 6]); // 2
// 随机选3个：
_.sample([1, 2, 3, 4, 5, 6], 3); // [6, 1, 4]