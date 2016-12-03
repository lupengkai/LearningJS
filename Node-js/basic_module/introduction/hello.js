/**
 * Created by tage on 11/25/16.
 */
global.console

if (typeof (window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}