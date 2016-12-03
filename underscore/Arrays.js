/**
 * Created by tage on 11/16/16.
 */
var arr = [2, 4, 6, 8];
_.first(arr); // 2
_.last(arr); // 8

_.flatten([1, [2], [3, [[4], [5]]]]); // [1, 2, 3, 4, 5]
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
_.zip(names, scores);
// [['Adam', 85], ['Lisa', 92], ['Bart', 59]]
var namesAndScores = [['Adam', 85], ['Lisa', 92], ['Bart', 59]];
_.unzip(namesAndScores);
// [['Adam', 'Lisa', 'Bart'], [85, 92, 59]]
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
_.object(names, scores);
// {Adam: 85, Lisa: 92, Bart: 59}
_.range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 从1开始小于11：
_.range(1, 11); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 从0开始小于30，步长5:
_.range(0, 30, 5); // [0, 5, 10, 15, 20, 25]

// 从0开始大于-10，步长-1:
_.range(0, -10, -1); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]