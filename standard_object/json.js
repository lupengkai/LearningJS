/**
 * Created by tage on 11/4/16.
 */
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"w3c\"Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

JSON.stringify(xiaoming);

JSON.stringify(xiaoming, null, '  ');

JSON.stringify(xioaming, ['name', 'skills'], ' ');


function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase()
    }
    return value;
}

JSON.stringify(xiaoming, convert, '  ')

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,

    toJSON: function () {
        return {
            'Name':this.name,
            'Age':this.age
        };

    }
}

JSON.stringify(xiaoming);

JSON.parse('[1,2,4,true]');
JSON.parse('{"name":"小明"，"age":14}');
JSON.parse('true');
JSON.parse('123.45')