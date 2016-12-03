const defaultConfig = './config-default.js';
// 可设定为绝对路径，如 /opt/product/config-override.js
const overrideConfig = './config-override.js';
const testConfig = './config-test.js';

const fs = require('fs');

var config = null;
config = require(defaultConfig);


if (process.env.NODE_ENV === 'test') {
    console.log(`Load ${testConfig}...`);
    config =Object.assign(config, require(testConfig));
} else {
    console.log(`Load ${defaultConfig}...`);
   
    try {
        if (fs.statSync(overrideConfig).isFile()) {
            console.log(`Load ${overrideConfig}...`);
            config = Object.assign(config, require(overrideConfig));
        }
    } catch (err) {
        console.log(`Cannot load ${overrideConfig}.`);
    }
}

module.exports = config;