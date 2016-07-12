/**
 * Created by tage on 7/11/16.
 */
var xiaoming = {
    name: 小明,
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null

};

xiaoming.name;

var xiaohong = {
    name: '小红',
    'middle-school':  'No.1 Middle School'

};//属性名中若含特殊字符，要用''，不能用.访问

xiaohong['middle-school'];//
xiaohong['name'];
xiaohong.name;

xiaohong.age;//undefined

var xioaming = {name: 'xiaoming'};
xiaoming.age;//undefined;
xioaming.age = 18;
delete xiaoming.age
delete xiaoming['name']
xiaoming.name;//undefined
delete xiaoming.school;//删除不存在的属性不报错
'school' in xiaoming;//false
'name' in xiaohong;//true

'toString' in xiaoming; //true in 包括继承属性

xiaoming.hasOwnProperty('toString');//false 自身属性
