/**
 * Created by tage on 11/9/16.
 */
var js = document.getElementById('js'),
    list = document.getElementById('list');
list.appendChild(js);

var list = document.getElementById('list'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);

var d = document.createElement('style');
d.setAttribute('type', 'text/css');
d.innerHTML = 'p { color: red}';
document.getElementsByTagName('head')[0].appendChild(d)

ref = document.getElementById('python');
list.insertBefore(haskell,ref);

var i, c,
    list = document.getElementById('list');
for (i=0; i< list.children.length;i++) {
    c = list.children[i];
}


