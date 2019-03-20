$(function() {
  var $mainSlider = $('.jumbotron-section__slider');
  var $progressBar = $('.jumbotron-section__progress');
  var $progressBarLabel = $('.slider__label');

  $mainSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );

    $progressBarLabel.text( calc + '% completed' );
  });

  $mainSlider.slick({
    autoplaySpeed:10000,
    speed:800,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    cssEase:'linear',
    fade:false,
    draggable:true,
  });

  var $productBtn = $('.products-section__toggle-btn');
  var $productPopUpList = $('.products-section__popup-list');

  $productBtn.on('click', function () {
    $(this).parent().find('.products-section__popup-list').toggleClass('products-section__popup-list_active');
  });
})
