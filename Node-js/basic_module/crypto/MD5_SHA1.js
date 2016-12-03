/**
 * Created by tage on 11/26/16.
 */

const crypto = require('crypto');

const hash = crypto.createHash('md5');
const hash2 = crypto.createHash('md5');
const hash3 = crypto.createHash('sha1');



hash.update('Hello, world!');
console.log(hash.digest('hex'));

hash2.update('Hello, world.');
console.log(hash2.digest('hex'));

hash3.update('Hello, world.');
console.log(hash3.digest('hex'));
