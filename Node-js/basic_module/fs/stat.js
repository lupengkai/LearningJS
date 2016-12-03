/**
 * Created by tage on 11/25/16.
 */
'use strict';
var fs = require('fs');
fs.stat('sample.txt', function (err,stat) {
    if(err) {
        console.log(err);
    } else {
        console.log('isFile: ' + stat.isFile());
        console.log('isDirectory: ' + stat.isDirectory());

    }
})