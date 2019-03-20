$(document).ready(function () {
	$(window).on("load",function(){
		$(".why-progress__content__items-description").mCustomScrollbar();
	});

	$(".production-slider").slick({
		autoplay:true,
		autoplaySpeed:10000,
		speed:900,
		slidesToShow:1,
		slidesToScroll:1,
		dots:true,
		cssEase:'linear',
		fade:false,
		draggable:true,
		prevArrow:'<button class="PrevArrow"></button>',
		nextArrow:'<button class="NextArrow"></button>'
	});
});