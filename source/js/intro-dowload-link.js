const $btn = $(".intro__download-link");
const $block = $(".intro__download-block");

$btn.on("click", function () {
  $block.toggleClass("opened");
});

$(document).on("click", function (e) {
  const $target = $(e.target);

  if (
    !$target.hasClass("intro__download-block") &&
    $target.parents(".intro__download-block").length === 0 &&
    !$target.hasClass("intro__download-link") &&
    $target.parents(".intro__download-link").length === 0
  ) {
    $block.removeClass("opened");
  }
});
