/**
 * Created by tage on 11/26/16.
 */
const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'scret-key');

hmac.update('Hello, world!');

console.log(hmac.digest('hex'));

