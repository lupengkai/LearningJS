/**
 *
 * Created by tage on 11/4/16.
 */

var Student = {
    name :'Robot',
    height:1.2
}

function createStudnet(name) {
    var s = Object.create(Student);
    s.name = name;
    return s;

}

var xiaoming = createStudnet('小明');

xiaoming.__proto__ === Student; //true