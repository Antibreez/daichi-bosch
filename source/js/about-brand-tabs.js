import Swiper, { FreeMode } from "swiper";

const $tabs = $(".about-brand__tabs");

const swiper = new Swiper(".about-brand__tabs-slider", {
  modules: [FreeMode],
  slidesPerView: "auto",
  freeMode: {
    enabled: true,
  },
});

$(window).on("scroll", function () {
  if ($tabs.length === 0) return;
  const gap = $(window).outerWidth() >= 1024 ? 126 : 64;

  console.log(gap);

  const top = $tabs.offset().top - $(window).scrollTop() - gap;

  top > 0 ? $tabs.removeClass("fixed") : $tabs.addClass("fixed");
});

$(document).on("click", ".about-brand__tabs-item", function (e) {
  if ($(e.currentTarget).hasClass("active")) return;

  $(".about-brand__tabs-item").removeClass("active");
  $(e.currentTarget).addClass("active");
});
