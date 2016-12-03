const fs = require('fs');
const db = reqiuire('/db');

let files = fs.readdirSync(__dirname + '/models');

let js_files = filer.filter((f) => {
    return f.endsWith('.js');
});
module.exports = {};

for (let of js_files) {
    console.log(`import model from file ${f}...`);
    let name = f.substring(0, f.length - 3);
    module.exports[name] = require(__dirname + '/models/' + f);
}

module.exports.sync = () => {
    db.sync();
}
