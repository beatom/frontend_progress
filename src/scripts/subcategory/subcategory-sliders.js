$(document).ready(function () {
	$('.image-slider-item').slick();

	/* destroy range slider on mobile */
	$('.range__slider, .special-products-slider').slick({
		responsive: [
			{
				breakpoint: 568,
				settings: "unslick"
			}
		]
	});
	/* more block slider */
	$('.more-item').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1,
					centerMode: true
				}
			}
		]
	});
	/* add scroll on block */
	$(window).on("load", function () {
		$(".range__slider__info, .special-products-slider__info--wrapper, .service__item__info__description").mCustomScrollbar();
	});

	/* click on button to show block */
	var curSlide = 0;
	var slides = $('.range__slider').find('.range__slider__item--wrapper');

	function highLightSlide() {
		slides.eq(curSlide % slides.length).addClass('active');
		curSlide++;
		if (curSlide >= slides.length) {
			$('.range__read-more--link').hide();
		}
	}

	$('.range__read-more--link').click(function() {
		highLightSlide();
	});
	highLightSlide();


	 /* second slider */
	var curSlideNodes = 0;
	var slidesNodes = $('.special-products-slider').find('.special-products-slider__item--wrapper');
	function highLightSlideNodes() {
		slidesNodes.eq(curSlideNodes % slidesNodes.length).addClass('active');
		curSlideNodes++;
		if (curSlideNodes >= slidesNodes.length) {
			$('.special-products__read-more--link').hide();
		}
	}

	$('.special-products__read-more--link').click(function() {
		highLightSlideNodes();
	});
	highLightSlideNodes();
});