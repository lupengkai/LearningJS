/**
 * Created by tage on 11/16/16.
 */
var div = $('#test-slide');
div.hide(3000);
div.show('slow');
div.hide('fast')
div.toggle('slow');

div.slideUp('slow');
div.slideDown('slow');
div.slideToggle('slow');

div.fadeOut('slow');
div.fadeIn('slow');
div.Toggle('slow');

div.animate({
    opacity:0.25,
    width: '256px',
    height: '256px'
}, 3000, function () {
    console.log('finish');
    $(this).css('opacity', '1.0').css('width', '128px').css('height', '128px');
    
});

div.slideDown(2000)
    .delay(1000)
    .animate({
        width: '256px',
        height: '256px'
    }, 2000)
    .delay(1000)
    .animate({
        width: '128px',
        height: '128px'
    }, 2000);

tr.fadeOut("slow",function(){
    tr.remove();
})