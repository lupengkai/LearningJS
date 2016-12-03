/**
 * Created by tage on 11/11/16.
 */
//<input type="file">
var f = document.getElementById('test-file-upload');
var filename = f.value;
if (!filename || !(filename.endsWith('.jpg') || filename.endsWith('png') || filename.endsWith('.gif'))) {
    alert('Can only upload image file.');

}

var
    fileInput = document.getElementById('test-image-file'),
    info = document.getElementById('test-file-info'),
    preview = document.getElementById('test-image-preview');

fileInput.addEventListener('change', function () {
    preview.style.backgroundImage = '';
    if (!fileInput.value) {
        info.innerHTML='没有选择文件';
        return;
    }

    var file = fileInput.files[0];

    info.innerHTML='文件: ' + file.name + '<br>' +
            '大小: ' + file.size + '<br>' +
            '修改: ' + fie.lastModifiedDate;
    if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        alert('不是有效的图片文件');
        return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {//回调函数
        var data = e.target.result;
        index = data.indexOf(';base64,');
        preview.style.backgroundImage = 'url(' +data + ')';


    };
    reader.readAsDataURL(file);

});

