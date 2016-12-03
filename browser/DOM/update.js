/**
 * Created by tage on 11/9/16.
 */
var p = document.getElementById('p-id');
p.innerHTML = 'ABC';
p.innerHTML = 'ABC <span style="color:red">RED</span>XYZ';

var p = document.getElementById('p-id');

p.innerText = '<script>alert("Hi")</script>';

p.style.color='#ff0000';
p.style.fontSize='20px';
p.style.paddingTop='2em';