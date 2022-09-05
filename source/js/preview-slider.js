import Swiper from "swiper";

const slider = new Swiper(".page-product__preview-slider", {
  direction: "horizontal",
  slidesPerView: "auto",

  breakpoints: {
    1024: {
      direction: "vertical",
    },
  },
});

const $slide = $(".page-product__preview-slide");
const $img = $(".page-product__preview-main-img img");

$slide.on("click", function () {
  const $s = $(this);
  const $simg = $s.find("img");
  const $w = $s.parents(".swiper").eq(0);
  const idx = $s.index();

  if (!$s.hasClass("is-active")) {
    $slide.removeClass("is-active");

    $s.addClass("is-active");
    $img.attr("src", $simg.attr("src"));
  }

  if ($(window).outerWidth() >= 1024) {
    if ($s.offset().top - $w.offset().top === 0) {
      if (idx > 0) {
        slider.slidePrev();
      }
    }

    if ($s.offset().top - $w.offset().top === 240) {
      if (idx < $slide.length - 1) {
        slider.slideNext();
      }
    }
  }

  if ($(window).outerWidth() < 1024 && $(window).outerWidth() >= 768) {
    if ($s.offset().left - $w.offset().left === 0) {
      if (idx > 0) {
        slider.slidePrev();
      }
    }

    if ($s.offset().left - $w.offset().left === 240) {
      if (idx < $slide.length - 1) {
        slider.slideNext();
      }
    }
  }

  if ($(window).outerWidth() < 768) {
    if ($s.offset().left - $w.offset().left === 0) {
      if (idx > 0) {
        slider.slidePrev();
      }
    }

    if ($s.offset().left - $w.offset().left === 168) {
      if (idx < $slide.length - 1) {
        slider.slideNext();
      }
    }
  }
});
