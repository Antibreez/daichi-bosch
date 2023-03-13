$(document).on('click', '.header__catalog-btn', function(e) {
  $(e.currentTarget).next().toggleClass('opened');
});

$(document).on('click', function(e) {
  const $target = $(e.target);

  if ($target.closest('.header__top-right-catalog').length === 0) {
    $('.header__catalog-drop').removeClass('opened');
  }
});

$(document).on('click', '.header__search-btn', function(e) {
  $('html').toggleClass('is-show-mobile-search-menu');
});

$(document).on('click', '.mobile-menu__search-back', function(e) {
  $('html').toggleClass('is-show-mobile-search-menu');
});
