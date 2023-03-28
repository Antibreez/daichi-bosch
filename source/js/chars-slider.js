import Swiper, { FreeMode, Scrollbar } from "swiper";
import { debounce } from "./util";

const watchOverflow = () => {
  if (slider.isLocked) {
    $(".page-product__chars-slider").parent().addClass("locked");
  } else {
    $(".page-product__chars-slider").parent().removeClass("locked");
  }
};

const slider = new Swiper(".page-product__chars-slider", {
  modules: [FreeMode, Scrollbar],
  slidesPerView: "auto",
  freeMode: {
    enabled: true,
  },
  scrollbar: {
    el: ".page-product__chars .progress",
    draggable: true,
  },
  on: {
    init: function () {
      if (this.isLocked) {
        $(this.el).parent().addClass("locked");
      } else {
        $(this.el).parent().removeClass("locked");
      }
    },
  },
});

$(window).on("resize", debounce(watchOverflow, 100));
