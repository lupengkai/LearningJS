/**
 * Created by tage on 11/26/16.
 */
const crypto = require('crypto');


ming = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();//素数
var generator = ming.getGenerator();//底数

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));