/**
 * Created by tage on 11/16/16.
 */
_.chain([1, 4, 9, 16, 25])
    .map(Math.sqrt)
    .filter(x => x % 2 === 1)
    .value();
// [1, 3, 5]