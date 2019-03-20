$(document).ready(function () {
	/* fixed questions block*/

	var $contentInner = $('.faq-inner');
	var $navInner = $('.faq-questions');

	if ($(window).width() >= 1024 && $(window).width() < 1440) {

		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 205) {
				$navInner.addClass('navigation-inner_fixed');
				$contentInner.addClass('faq-inner_when-nav-fixed');
			} else {
				$navInner.removeClass('navigation-inner_fixed');
				$contentInner.removeClass('faq-inner_when-nav-fixed');
			}
		});
	}

	if ($(window).width() >= 1440) {
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 400) {
				$navInner.addClass('navigation-inner_fixed');
				$contentInner.addClass('faq-inner_when-nav-fixed');
			} else {
				$navInner.removeClass('navigation-inner_fixed');
				$contentInner.removeClass('faq-inner_when-nav-fixed');
			}
		});
	}

	var $navItem = $('.faq-questions__list__item');

	$navItem.on('click', function (e) {
		e.preventDefault();
		$(this).parent().find('.faq-questions__list__item.faq-questions__list__item_active')
			.removeClass('faq-questions__list__item_active');
		$(this).addClass('faq-questions__list__item_active');
	});

	// INNER NAVIGATION

	var $navInnerTitle = $('.navigation-inner__title');
	var $navInnerList = $('.faq-questions__list');
	var $navInnerCollapse = $('.navigation-inner__collapse');

	$navInnerTitle.on('click', function () {
		$navInnerList.addClass('faq-questions__list_active');
	});

	$navInnerCollapse.on('click', function () {
		$navInnerList.removeClass('faq-questions__list_active');
	});
//	///////////////////////////////////////

	// $('.faq-answer__list__item').height(window.innerHeight);
	var $document = $(document);
	var documentHeight = window.innerHeight;
	var positions = [];
	var margins = 107;
	var elements = $('.faq-answer__list__item');

	for (var i = 0; i < elements.length; i++) {
		var $element = $(elements[i]);
		positions.push($element.offset().top + margins);
	}

	var $nodes = $('.faq-questions__list__links__item');

	$(document).scroll(function () {

		var nodeTop = $document.scrollTop() + documentHeight;
        // console.log(nodeTop);

        $('.faq-questions__list__item').removeClass('active');

		for (var i = 0; i < positions.length; i++) {
			var current = positions[i] + documentHeight / 2;
			var next = positions[i + 1] ? positions[i + 1] + documentHeight / 2 : null;
			if (next && nodeTop > current && nodeTop <= next) {
				$nodes.eq(i).parents('.faq-questions__list__item').addClass('active');
			}else if(!next && nodeTop > current) {
                $nodes.eq(i).parents('.faq-questions__list__item').addClass('active');
                $(".mCustomScrollbar").mCustomScrollbar("scrollTo",0);
			}
		}
	});
	var $nodesLink = $('.faq-questions__list__links__item');

	$nodesLink.each(function (index) {
		var $node = $(this);
		$node.click(function () {
			$('html, body').animate({scrollTop: (positions[index] - documentHeight / 2 + 1)}, 1000);
		});
	});



	/* add scroll to fixed questions block */
	if ($(window).width() > 1024) {
		$(".faq-questions").mCustomScrollbar();

	}

	/* hide questions list on mobile by click */
	var width = window.innerWidth || document.body.clientWidth;
	if (width < 1024) {
		$('.faq-questions__list__links__item').click(function () {
			$('.faq-questions__list').removeClass('faq-questions__list_active');
			$('.faq-questions__list__item').removeClass('fixed-active');
			$(this).prev().parents('.faq-questions__list__item').addClass('fixed-active');
		});
	}
});