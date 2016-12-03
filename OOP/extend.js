/**
 * Created by tage on 11/5/16.
 */

class Student {
    constructor(name) {
        this.name=name;
    }
    
    hello() {
        alert('Hello,' + name + '!');
    }
    
}

class PrimaryStudent extends Student {
    constructor(name, grade){
        super(name);
        this.grade = grade;
    }
    
    myGrade(){
        alert('I am at grade ' + this.grade);
    }
    
    
}