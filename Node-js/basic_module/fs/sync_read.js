/**
 * Created by tage on 11/25/16.
 */
'use strict';
var fs = require('fs');
try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
       
}