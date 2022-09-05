const $tabs = $(".page-buy-map .tab-list a");
const $tabItems = $(".page-buy-map .tab__item");

const $viewBtn = $(".page-buy-map__toggle-btn");
const $cardView = $(".page-buy-map__places-cards");
const $mapView = $(".page-buy-map__places-map");

$tabs.on("click", function (e) {
  e.preventDefault();
  if ($(this).hasClass("is-active")) return;

  const name = $(this).attr("data-tab");

  $tabs.removeClass("is-active");
  $(this).addClass("is-active");

  $tabItems.removeClass("is-active");
  $(`.page-buy-map .tab__item[data-tab=${name}]`).addClass("is-active");
});

$viewBtn.on("click", function () {
  if ($(this).hasClass("is-map")) {
    $(this).removeClass("is-map");
    $cardView.addClass("is-visible");
    $mapView.removeClass("is-visible");
  } else {
    $(this).addClass("is-map");
    $cardView.removeClass("is-visible");
    $mapView.addClass("is-visible");
  }
});
