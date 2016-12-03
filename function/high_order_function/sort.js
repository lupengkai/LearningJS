/**
 * Created by tage on 9/22/16.
 */

var arr = [1, 2, 3, 4];
arr.sort(function (x,y){
    if(x <y) {
        return 1;
    } else if (x >y) {
        return -1;
    }
    else {
        return 0;
    }
})

//sort 修改了当前对象内的顺序　返回的是当前对象