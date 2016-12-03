/**
 * Created by tage on 11/25/16.
 */
'use strict';
var fs = require('fs');
var ws1 = fs.createWriteStream('sample.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.write(new Buffer('END.', 'utf-8'));
ws1.end();
