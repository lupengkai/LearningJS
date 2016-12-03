/**
 * Created by tage on 11/5/16.
 */
function Student(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello,' + this.name + '!');

    }
}

var xiaoming = new Student('小明');

xiaoming.constructor === Student.prototype.constructor;
Student.prototype === Student;
Object.getPrototypeOf(xiaoming) === Student.prototype
xiaoming instanceof Student;

function Student(props) {
    this.name = props.name || '匿名';
    this.grade = props.grade || 1;
}

Student.prototype.hello = function () {
    alert('Hello,' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {})
}


var xiaoming = createStudent({
    name: '小明'
});

