jQuery(function($) {
$(document)
.ready(
function() {

if ($('.sticky-processed').length) {

$('.sticky-processed').clone().insertBefore(
'.sticky-processed').addClass(
'sticky-cloned').removeClass(
'sticky-processed');

$('.sticky-cloned').children().each(function(i, e) {
if ($(e).hasClass('clone')) {
return;
} else {
$(e).remove();
return;
}
});

$('.sticky-cloned').css({
'width' : $('.sticky-processed').outerWidth(),
'left' : $('.sticky-processed').offset().left
});

$('.sticky-processed thead tr th')
.each(
function(index1, processed) {
var processedDimensions = [
$(this).width(),
$(this).height(),
$(this).css(
'font-weight'),
$(this).css(
'text-align'),
$(this).css('padding'),
$(this).css('margin') ];

$('.sticky-cloned thead tr th')
.each(
function(
index2,
cloned) {
if (index1 == index2) {

$(
cloned)
.css(
{
'width' : $(
processed)
.outerWidth()
});

return;
}
return;
});
});

$('.toolbar-menu a').on(
'click',
function() {
if ($('.toolbar-menu').length) {
var toolbarHeight = $('#toolbar')
.height();
$(".sticky-cloned").css("top",
toolbarHeight);
}
});

$(window)
.scroll(
function() {
var windowTop = $(window)
.scrollTop();
var stickyProcessedTop = $(
'.sticky-processed')
.offset().top;
var stickyClonedTop = $(
'.sticky-cloned')
.offset().top;
var stickyCloned = $('.sticky-cloned');
var stickyProcessedBottom = stickyProcessedTop
+ $('.sticky-processed')
.height();
var stickyClonedHeight = $(
'.sticky-cloned')
.height();
$('.sticky-cloned')
.css(
{
'width' : $(
'.sticky-processed')
.outerWidth(),
'top' : $(
'#toolbar')
.height(),
'left' : $(
'.sticky-processed')
.offset().left
});

if ($('.toolbar-menu').length) {
var toolbarHeight = $(
'#toolbar')
.height();

if (windowTop
+ toolbarHeight >= stickyProcessedTop
&& windowTop
+ toolbarHeight
+ stickyClonedHeight <= stickyProcessedBottom) {
stickyCloned
.css({
'visibility' : 'visible',
'top' : toolbarHeight
});

} else {
stickyCloned.css(
'visibility',
'hidden');

}
} else {

if (windowTop >= stickyProcessedTop
&& windowTop
+ stickyClonedHeight <= stickyProcessedBottom) {
stickyCloned
.css({
'visibility' : 'visible',
'top' : '0'
});

} else {
stickyCloned.css(
'visibility',
'hidden');
}

}
});

$(window)
.resize(
function() {
var windowTop = $(window)
.scrollTop();
var stickyProcessedTop = $(
'.sticky-processed')
.offset().top;
var stickyClonedTop = $(
'.sticky-cloned')
.offset().top;
var toolbarHeight = $(
'#toolbar').height();
var stickyCloned = $('.sticky-cloned');
var stickProcessed = $('.sticky-processed');

stickyCloned.css({
'width' : stickProcessed
.outerWidth(),
'top' : toolbarHeight,
'left' : stickProcessed
.offset().left
});

if ($('.toolbar-menu').length) {
if (windowTop
+ toolbarHeight >= stickyProcessedTop) {
stickyCloned.css(
'visibility',
'visible');

} else {
stickyCloned.css(
'visibility',
'hidden');
}

} else {

if (windowTop >= stickyProcessedTop) {
stickyCloned.css(
'visibility',
'visible');

} else {
stickyCloned.css(
'visibility',
'hidden');
}
}
});
}

});

});
