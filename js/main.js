var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $pMain = $('p:first-child');
var $img = $('img');
var $h2 = $('h2');
var $mainList = $('main ul');
var $lastList = $('main li:last-child');
var $firstList = $('main li:first-child');
var $dl = $('dl');
var $dt = $('dt');

$header.addClass('masthead');
$h1.removeClass('big-heading');
$main.addClass('wrapper');
$h1.addClass('logo');
$pMain.addClass('intro');
$img.addClass('slug-img');
$h2.addClass('slug-head');
$mainList.addClass('slug-list');
$firstList.addClass('slug-list-first');
$lastList.addClass('slug-list-last');
$dl.addClass('classification');
$dt.removeClass('big-label');

$lastList.show();
