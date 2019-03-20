$(document).ready(function () {

    /* fixed navigation */
    $('.category-items__item').height(window.innerHeight);
    var $document = $(document);
    var documentHeight = window.innerHeight;
    var positions = [];
    var heights = [];
    var elements = $('.category-items__item');

    for (var i = 0; i < elements.length; i++) {
        var $element = $(elements[i]);
        var height = $element.offset().top + documentHeight;
        positions.push(height);
        heights.push($element.height());
    }

    var $nodes = $('.category-items__links__item');

    $(document).scroll(function () {

        var nodeTop = $document.scrollTop() + documentHeight + 1;
        var current = 0;

        for (var i = 0; i < positions.length; i++) {
            if (nodeTop > (positions[i] - (heights[i] / 2))) {
                current = i;
                $nodes.eq(i).addClass('active');
            } else {
                $nodes.eq(i).removeClass('active');
            }
        }

        if ((nodeTop > ($(".footer").offset().top - 40 - $(".category-items__links").height()))
            || !$(".category-items__links__item.active").length) {
            $(".category-items__links").removeClass("isFixed");
        } else {
            $(".category-items__links").addClass("isFixed");
        }
    });

    $nodes.each(function (index) {
        var $node = $(this);
        $node.click(function () {
            $('html, body').animate({scrollTop: (positions[index] - documentHeight - $(elements).height() / 2 + $('.header').height())}, 1000);
        });
    });

    /* add scroll on block */
	$(window).on("load",function(){
		$(".category-items-description").mCustomScrollbar();
	});
});