$(function() {
  var $serviceSlider = $('.engineering-service_slider');

  $serviceSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    speed: 600
  });

  if ($(window).width() > 768) {
    $(window).on('load', function() {
      $('.logistics__point-description-text').mCustomScrollbar();
    });
  }

  var $formQuery = $('.form-query__form');
  var $fileInput = $('.form-query__form-file');
  var $fileLabel = $('.form-query__form-file-label-text');
  var $fileLabelValue = $fileLabel.text();
  var $fileDelete = $('.form-query__form-file-delete');

  $fileInput.on('change', function (e) {
    var fileName = '';

    if (e.target.value) {
      fileName = e.target.value.split( '\\' ).pop();
    }

    if (fileName) {
      $fileLabel.text(fileName);

      if ($fileLabel.text().length > 20) {
        $fileLabel.text($fileLabel.text().substring(0, 20) + '...');
      }

      $formQuery.addClass('form-query__form_file-active');
    } else {
      $fileLabel.text($fileLabelValue);
      $formQuery.removeClass('form-query__form_file-active');
    }
  });

  $fileDelete.on('click', function (e) {
    $fileInput.replaceWith($fileInput.val('').clone(true));
    $fileLabel.text('Файл не прикреплен');
    $formQuery.removeClass('form-query__form_file-active');
  });

  $('.form-query__form-category').each(function () {
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

  })
})
