$(document).on("click", ".about-brand__areas-tab", function (e) {
  if ($(e.currentTarget).hasClass("opened")) {
    return;
  }

  $(".about-brand__areas-tab").removeClass("opened");
  $(e.currentTarget).addClass("opened");

  const idx = $(".about-brand__areas-tab").index($(e.currentTarget));

  $(".about-brand__areas-image img").removeClass("opened");
  $(".about-brand__areas-image img").eq(idx).addClass("opened");
});
