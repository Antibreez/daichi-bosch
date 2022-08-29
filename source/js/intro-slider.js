import Swiper, { Navigation, Pagination } from "swiper";

const slider = new Swiper(".intro__slider", {
  modules: [Navigation, Pagination],

  pagination: {
    el: ".intro .swiper-pagination",
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".intro .swiper-button-next",
    prevEl: ".intro .swiper-button-prev",
  },
});
