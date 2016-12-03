/**
 * Created by tage on 11/25/16.
 */
'use strict';

var fs = require('fs');

fs.readFile('sample.txt' , function (err,data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
        var text = data.toString('utf-8');
        console.log(text);
        var buf = new Buffer(text, 'utf-8');
        console.log(buf);
    }


});