import Swiper, { FreeMode, Scrollbar } from "swiper";

const slider = new Swiper(".page-product__chars-slider", {
  modules: [FreeMode, Scrollbar],
  slidesPerView: "auto",
  freeMode: {
    enabled: true,
  },
  scrollbar: {
    el: ".page-product__chars .progress",
  },
});
