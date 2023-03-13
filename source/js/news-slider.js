import Swiper, { Navigation, Pagination } from "swiper";

const slider = new Swiper(".page-index__news-slider", {
  modules: [Pagination],
  freeMode: true,
  slidesPerView: 'auto',
  // spaceBetween: 24,

  pagination: {
    el: ".page-index__news-pagination",
    type: "progressbar",
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
