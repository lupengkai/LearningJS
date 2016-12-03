/**
 * Created by tage on 11/26/16.
 */
'use strict'





const Sequelize = require('sequelize')
const config = require('./config')


var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})

var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
    timestamps: false
})

var now = Date.now()
// Pet.create({
//     id: 'g-' + now,
//     name: 'Gaffey',
//     gender: false,
//     birth: '2007-07-07',
//     createdAt: now,
//     updateAt: now,
//     version: 0
// }).then(function (p) {
//     console.log('created: ' + JSON.stringify(p))
// }).catch(function (err) {
//     console.log('failed: ' + err)
// });


(async() => {
    var dog = await Pet.create({
        id: 'd-' + now,
        name: 'Gaffey',
        gender: false,
        birth: '2007-07-07',
        createdAt: now,
        updateAt: now,
        version: 0
    });
    console.log('created: ' + JSON.stringify(dog));
})();

(async() => {
    var pets = await Pet.findAll({
        where: {
            name: 'Gaffey'
        }
    });
    console.log(`find ${pets.length} pets:`);
    for (let p of pets) {
        console.log(JSON.stringify(p));
        p.gender = true;
        await p.save();
        await p.destroy();
    }
  
})();



//你不能混用promise和async，promise的then还没有被调用时，后面的代码已经开始执行了
//写到一个async里，多个async调用是同时执行的，查询比插入要快








console.log('app starter at port 3000...')