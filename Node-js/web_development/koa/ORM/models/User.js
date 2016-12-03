const db = require('../db');

module.exports = db.defineModel('users',{
    email: {
        type: db.STRING(100),
        unique:true
    },
    password: db.STRING,
    name: db.STRIMG(100),
    gender: db.BOOLEAN
});
