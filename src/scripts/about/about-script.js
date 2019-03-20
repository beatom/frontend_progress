$(document).ready(function () {


	$('.image-slider-item').slick({
		variableWidth: true
	});

	/* slider */
	var width = window.innerWidth || document.body.clientWidth;
	var $slick = $('.gallery');

	if(width < 1024) {
		$slick.slick({
			dots: false,
			arrows: true,
			infinite: false,
			variableWidth: true,
			centerMode: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	} else {
		$slick.slick({
			rows: 2,
			dots: true,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4
		});
	}

	/* progress in number  mobile slider */
	$('.progress-in-numbers__list').slick({
		responsive: [
			{
				breakpoint: 99999,
				settings: "unslick"
			},
			{
				breakpoint: 768,
				settings: {
					dots: false,
					arrows: true,
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	/* animations element on scroll*/
	function animateElements() {
		$('.progressbar').each(function() {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true).addClass('active');
				$(this).find('.circle').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent / 100,
					thickness: 4,
					size: 128,
					emptyFill: "#ffffff",
					fill: {
						color: '#f09d06'
					}
				});
			}
		});
	}
	// Show animated elements
	animateElements();
	$(window).scroll(animateElements);
});