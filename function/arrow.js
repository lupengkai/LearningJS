/**
 * Created by tage on 9/25/16.
 */
var fn = x => x * x;


function fn(x) {
    return x * x;
}

//函数只含一条语句可以省略｛｝　多条语句　不能省略
//参数不是一个　需要（）

(x,y, ... rest) => {
    var i, sum = x + y;
    for (i=0; i< rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}


//返回对象
x => {{foo:x}}



//函数内的this 指向外部对象

var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth;
        var fn = () => new Date.getFullYear() - this.birth;
        return fn();

    }
}

//用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略