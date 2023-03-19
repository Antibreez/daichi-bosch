import Swiper, { Navigation, Pagination } from "swiper";

const slider = new Swiper(".about-brand__objects-slider", {
  modules: [Pagination],
  freeMode: true,
  slidesPerView: "auto",
  // spaceBetween: 24,

  pagination: {
    el: ".about-brand__objects-pagination",
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
