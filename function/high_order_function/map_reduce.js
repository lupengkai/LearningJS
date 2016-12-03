/**
 * 
 * Created by tage on 9/22/16.
 */


function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6];
arr.map(pow);
arr.map(String);


arr.reduce(function (x,y) {
    return x+y;

})

//map 遍历使用函数
//reduce 接受两个参数　结果和下一个


