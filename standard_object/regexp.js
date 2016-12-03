/**
 * Created by tage on 11/3/16.
 */

var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');
re1.test('ABC-001')

'a b  c'.split(' ');
'a b   c'.split(/\s+/);
'a,b,c,  d'.split(/[\s\,]+/);


var re = /^(\d{3})-(\d{3,8})$/;
re.exec('010-12345678'); //['010-12345678', '010', '12345678']
//?尽量少

var r1=/test/g //多次执行exec()方法来搜索一个匹配的字符串




