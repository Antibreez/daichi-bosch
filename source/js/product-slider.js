import Swiper, { Pagination } from "swiper";

const slider = new Swiper(".page-product__slider .swiper", {
  modules: [Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  pagination: {
    el: ".page-product__slider .progress",
    type: "progressbar",
  },
});
