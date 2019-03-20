$(document).ready(function () {
	var $category = $('.solutions-filter__nav__list__link__top.category');
	var $subcategory = $('.solutions-filter__nav__list__link__top.subcategory');
	var $industry = $('.solutions-filter__nav__list__link__top.industry');

	$category.click(function () {
		$(this).toggleClass('open');
		$(this).next().toggleClass('open');
	});
	$subcategory.click(function () {
		$(this).toggleClass('open');
		$(this).next().toggleClass('open');
	});
	$industry.click(function () {
		$(this).toggleClass('open');
		$(this).next().toggleClass('open');
	});

	/*add selected option to result span*/
	$('.solutions-filter__nav__list__link').click(function () {
		var resultText = $(this).parents('.solutions-filter__nav__list').prev('.solutions-filter__nav__list__link__top').children('.solutions-filter__nav__list__link--result');
		$(this).innerHTML;
		$(resultText).text((this).innerHTML);
		$(this).parents('.solutions-filter__nav__list').prev('.solutions-filter__nav__list__link__top').removeClass('open');
		$(this).parents('.solutions-filter__nav__list').removeClass('open');
	});
	$('.solutions-filter__nav__list__link').click(function () {
		$(this).parents('.solutions-filter__nav__list').prev('.solutions-filter__nav__list__link__top').removeClass('solutions-filter__nav__list__link__top__placeholder');
	});

	/*hide select list on document click*/
	$(document).click(function (e) {
		if (!$(e.target).closest(".solutions-filter__nav__list__link__top").length) {
			$('.solutions-filter__nav__list').removeClass('open');
			$('.solutions-filter__nav__list__link__top').removeClass('open');
		}
		e.stopPropagation();
	});

	$(window).on("load", function () {
		$('.solutions-progress-description').mCustomScrollbar();
	});
});
