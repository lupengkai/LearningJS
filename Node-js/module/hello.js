/**
 * Created by tage on 11/25/16.
 */
'use strict';

var s = 'Hello';


function greet(name) {
    console.log(s  + ', ' + name + '!');
}


function haha() {

}
// module.exports = greet;
module.exports ={
    greet:greet,
    haha: haha
};
        