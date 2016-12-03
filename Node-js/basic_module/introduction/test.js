/**
 * Created by tage on 11/25/16.
 */
'use strict';

process.nextTick(function () {
    console.log('nextTick callback!');
    
});
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);

});
console.log('nextTick was set!');

