import Swiper, { Pagination } from "swiper";

const slider = new Swiper(".page-series__design-slider", {
  modules: [Pagination],
  slidesPerView: "auto",
  // centeredSlides: true,
  pagination: {
    el: ".page-series__design-slider .progress",
    type: "progressbar",
  },

  // breakpoints: {
  //   768: {
  //     slidesPerView: 1,
  //   }
  // }
});
