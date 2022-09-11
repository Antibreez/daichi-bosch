import Swiper, { FreeMode } from "swiper";

const swiper = new Swiper(".tab-list-slider", {
  modules: [FreeMode],
  slidesPerView: "auto",
  freeMode: {
    enabled: true,
  },
});
