import Swiper, { Navigation, Pagination } from "swiper";
import { debounce } from "./util";

const watchOverflow = () => {
  if (slider.isLocked) {
    $(".about-brand__objects-slider").addClass("locked");
  } else {
    $(".about-brand__objects-slider").removeClass("locked");
  }
};

const slider = new Swiper(".about-brand__objects-slider", {
  modules: [Pagination],
  freeMode: true,
  slidesPerView: "auto",
  // spaceBetween: 24,

  pagination: {
    el: ".about-brand__objects-pagination",
    type: "progressbar",
  },
  on: {
    init: function () {
      if (this.isLocked) {
        $(this.el).addClass("locked");
      } else {
        $(this.el).removeClass("locked");
      }
    },
  },

  // breakpoints: {
  //   768: {
  //     slidesPerView: 'auto',

  //   }
  // }

  // navigation: {
  //   nextEl: ".intro .swiper-button-next",
  //   prevEl: ".intro .swiper-button-prev",
  // },
});

$(window).on("resize", debounce(watchOverflow, 100));
