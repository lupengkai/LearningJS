/**
 * Created by tage on 11/26/16.
 */
var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

require('./app.js');