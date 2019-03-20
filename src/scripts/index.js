$(document).ready(function() {

  var $scrollToTop = $('.arrow-up-for-scroll');

  $($scrollToTop).click(function () {
      $('body,html').animate({
          scrollTop : 0
      }, 500);
  });

  // SIBEBAR & MAIN NAVIGATION MENU

  var $buttonMenu = $('.button-menu');
  var $buttonMenuClose = $('.button-menu_active');
  var $navMenu = $('.nav-menu');
  var $navMenuItem = $('.nav-menu__item');
  var $headerHeight = $('.header').outerHeight(true);
  var $navMenuHeight = $('.nav-menu').outerHeight(true);
  var $overlay = $('.overlay');

  $buttonMenu.on('click', function (event) {
    event.stopPropagation();
    $navMenu.toggleClass('nav-menu_active');
    $buttonMenu.toggleClass('button-menu_active');
    $overlay.toggleClass('overlay_active');
    $('.navigation-inner__list').removeClass('navigation-inner__list_active');
  });

  $navMenuItem.on('click', function () {
    $navMenu.removeClass('nav-menu_active');
    $($overlay).removeClass('overlay_active');
    $buttonMenu.removeClass('button-menu_active');
  });

  $overlay.on('click', function () {
    $(this).removeClass('overlay_active');
    $navMenu.removeClass('nav-menu_active');
    $buttonMenu.removeClass('button-menu_active');
  });

  var $selectRus = $('.nav-menu__lang-rus');
  var $selectEng = $('.nav-menu__lang-eng');

  $selectRus.on('click', function () {
    $(this).addClass('nav-menu__lang_active');
    $selectEng.removeClass('nav-menu__lang_active');
  });

  $selectEng.on('click', function () {
    $(this).addClass('nav-menu__lang_active');
    $selectRus.removeClass('nav-menu__lang_active');
  });

  $(window).click(function () {
    $navMenu.removeClass('nav-menu_active');
    $choiceTown.removeClass('choice-town_active');
    $buttonMenu.removeClass('button-menu_active');
    $($overlay).removeClass('overlay_active');
  });

  if ($(window).width() <= 768) {
    $overlay.css('top', $headerHeight + 'px');
  }

  $(window).on('scroll', hideChoiceTown);

  function hideChoiceTown() {
    $choiceTown.removeClass('choice-town_active');
  }

  // INNER NAVIGATION MENU

  var $navItem = $('.navigation-inner__item');

  $navItem.on('click', function (e) {
    e.preventDefault();
    $(this).parent().find('.navigation-inner__item.navigation-inner__item_active')
    .removeClass('navigation-inner__item_active');
    $(this).addClass('navigation-inner__item_active');
    $navInnerList.removeClass('navigation-inner__list_active');
  });

  var $navInnerTitle = $('.navigation-inner__title');
  var $navInnerList = $('.navigation-inner__list');
  var $navInnerCollapse = $('.navigation-inner__collapse');

  $navInnerTitle.on('click', function () {
    $navInnerList.toggleClass('navigation-inner__list_active');
  });

  $navInnerCollapse.on('click', function () {
    $navInnerList.removeClass('navigation-inner__list_active');
  })

  // HEADER

  var $choiceTown = $('.choice-town');
  var $townOption = $('.choice-town__item');
  var $townValue = $('.choice-town__current-value');

  $choiceTown.on('click', function (event) {
    event.stopPropagation();
    $(this).toggleClass('choice-town_active');
  });

  $townOption.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $townValue.text($(this).text());
    $choiceTown.removeClass('choice-town_active');
  })

  var $choiceLangRus = $('.choice-language__item_rus');
  var $choiceLangEng = $('.choice-language__item_eng');

  $choiceLangRus.on('click', function () {
    $(this).addClass('choice-language__item_active');
    $choiceLangEng.removeClass('choice-language__item_active');
  });

  $choiceLangEng.on('click', function () {
    $(this).addClass('choice-language__item_active');
    $choiceLangRus.removeClass('choice-language__item_active');
  });

  // FOOTER

  var $footerListOpener = $('.links-item__caption');

  $footerListOpener.on('click', function () {
    $(this).parent().toggleClass('links-item__container_active');
  });

});
