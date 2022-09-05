const $btn = $(".page-buy-map__country-btn");
const $popup = $(".page-buy-map__country-popup");
const $close = $popup.find(".close");

$btn.on("click", function () {
  $popup.toggleClass("opened");
});

$close.on("click", function () {
  $popup.removeClass("opened");
});

$(document).on("click", function (e) {
  const $target = $(e.target);
  if (
    !$target.hasClass("page-buy-map__country-popup") &&
    $target.parents(".page-buy-map__country-popup").length === 0 &&
    !$target.hasClass("page-buy-map__country-btn") &&
    $target.parents(".page-buy-map__country-btn").length === 0
  ) {
    $popup.removeClass("opened");
  }
});
