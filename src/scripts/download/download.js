$(function() {
  if ($(window).width() >= 1440) {
    $('.navigation-inner__list').stick_in_parent({
      offset_top: 120
    });
  }

  if ($(window).width() >= 769 && $(window).width() < 1440) {
    $('.navigation-inner__list').stick_in_parent({
      offset_top: 80
    });
  }

  var $filterCategory = $('.filters__filter_category');
  var $filterType = $('.filters__filter_type');
  var $filterOption = $('.filters__option');

  $filterCategory.on('click', showCategory);

  $filterType.on('click', showType);

  $filterOption.on('click', selectOption);

  $(document).click(function (e) {
    e.stopPropagation();
    if (!$(e.target).closest(".filters__filter_value").length) {
      $('.filters__options').removeClass('filters__options_active');
      $filterType.removeClass('opened');
      $filterCategory.removeClass('opened');
    }
  });

  function selectOption() {
    var selectedText = $(this).text();
    var value = $(this).parent().prev('.filters__filter_value').children('.filters__filter_value-text');
    value.text(selectedText);
  }

  function showCategory() {
    $filterCategory.children('.filters__options').addClass('filters__options_active');
    $filterType.children('.filters__options').removeClass('filters__options_active');
    $(this).addClass('opened');
    $filterType.removeClass('opened');
  }

  function showType() {
    $filterType.children('.filters__options').addClass('filters__options_active');
    $filterCategory.children('.filters__options').removeClass('filters__options_active');
    $(this).addClass('opened');
    $filterCategory.removeClass('opened');
  }
});
