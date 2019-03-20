$(document).ready(function () {
	/* add scroll on block */
	$(window).on("load", function () {
		$(".contacts-office__info__wrapper").mCustomScrollbar();
	});


	/* tabs */
	$('.tabgroup > div').hide();
	$('.tabgroup > div:first-of-type').show();
	$('.vacancy-open__list__item__link').click(function (e) {
		e.preventDefault();
		var $this = $(this),
			tabgroup = '#' + $this.parents('.vacancy-open__list').data('tabgroup'),
			others = $this.closest('li').siblings().children('a'),
			target = $this.attr('href');
		others.removeClass('active');
		$this.addClass('active');
		$(tabgroup).children('div').hide();
		$(target).show();
		if ($('.vacancy-open__list__item:last-child .vacancy-open__list__item__link').hasClass('active')) {
			$('.vacancy-open__list__item:first-child').addClass('underline');
		} else {
			$('.vacancy-open__list__item:first-child').removeClass('underline');
		}
	});

	/* input file */
	(function () {
		'use strict';
		$('.input-file').each(function () {
			var $input = $(this),
				$label = $input.next('.js-labelFile'),
				labelVal = $label.html();

			$input.on('change', function (element) {
				var fileName = '';
				if (element.target.value) fileName = element.target.value.split('\\').pop();
				fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
			});
		});

	})();
});