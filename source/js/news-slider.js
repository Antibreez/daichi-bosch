import Swiper, { Navigation, Pagination } from "swiper";
import { debounce } from "./util";

const watchOverflow = () => {
  if (slider.isLocked) {
    $(".page-index__news-slider").addClass("locked");
  } else {
    $(".page-index__news-slider").removeClass("locked");
  }
};

const slider = new Swiper(".page-index__news-slider", {
  modules: [Pagination],
  freeMode: true,
  slidesPerView: "auto",
  // spaceBetween: 24,

  pagination: {
    el: ".page-index__news-pagination",
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
// $(window).on("resize", () => {
//   console.log(slider.isLocked);
// });
