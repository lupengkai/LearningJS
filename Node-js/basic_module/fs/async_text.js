/**
 * Created by tage on 11/25/16.
 */
'user strict';
var fs = require('fs');
var data = fs.readFile('sample.txt', 'utf-8', function (err,data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


