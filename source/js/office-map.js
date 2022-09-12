//const $cards = $(".page-buy-map__places-cards .page-buy-map__places-card");
//const $mapCard = $(".page-buy-map__places-map .page-buy-map__places-card");
//const $mapCardWrapper = $(".page-buy-map__places-map-card");
//const $mapCardClose = $(".page-buy-map__places-map-card .close");

if ($(".office__map").length > 0) {
  function scriptLoading(src, callback) {
    let script = document.createElement("script");
    let loaded;

    script.setAttribute("src", src);
    if (callback) {
      script.onreadystatechange = script.onload = () => {
        if (!loaded) {
          callback();
        }
        loaded = true;
      };
    }
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  //let options = $(".contacts__map").data();

  scriptLoading("//api-maps.yandex.ru/2.1/?lang=ru_RU", () => {
    ymaps.ready(() => {
      let map = new ymaps.Map(
        $(".office__map")[0],
        {
          center: [55.796567, 37.536931],
          zoom: $(".office__map").data().zoom,
          controls: ["zoomControl"],
        },
        {}
      );

      const vw = $(window).outerWidth();
      let w = vw >= 1440 ? "desktop" : vw >= 1024 ? "medium" : "tablet";

      if (vw >= 1440) {
        map.container.getElement().style.height = "527px";
        map.container.getElement().parentNode.style.height = "527px";
      } else if (vw >= 1024) {
        map.container.getElement().style.height = "560px";
        map.container.getElement().parentNode.style.height = "560px";
      } else {
        map.container.getElement().style.height = "400px";
        map.container.getElement().parentNode.style.height = "400px";
      }

      $(window).on("resize", function () {
        if (w === "desktop" && $(this).outerWidth() < 1440) {
          w = "medium";
          map.container.getElement().style.height = "560px";
          map.container.getElement().parentNode.style.height = "560px";
        }

        if (w === "medium" && $(this).outerWidth() >= 1440) {
          w = "desktop";
          map.container.getElement().style.height = "527px";
          map.container.getElement().parentNode.style.height = "527px";
        }

        if (w === "medium" && $(this).outerWidth() < 1024) {
          w = "tablet";
          map.container.getElement().style.height = "400px";
          map.container.getElement().parentNode.style.height = "400px";
        }

        if (w === "tablet" && $(this).outerWidth() >= 1024) {
          w = "medium";
          map.container.getElement().style.height = "560px";
          map.container.getElement().parentNode.style.height = "560px";
        }
      });

      var squareLayout = ymaps.templateLayoutFactory.createClass(
        `<div id="placemarkr-office" class="map-marker-office"></div>`
      );

      var squarePlacemark = new ymaps.Placemark(
        [55.796567, 37.536931],
        {
          hintContent: "ООО «Даичи»",
        },
        {
          iconLayout: squareLayout,
          // Описываем фигуру активной области "Прямоугольник".
          iconShape: {
            type: "Rectangle",
            // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
            coordinates: [
              [-28, -56],
              [28, 0],
            ],
          },
        }
      );

      map.geoObjects.add(squarePlacemark);

      // $cards.each((idx, card) => {
      //   const coordinates = $(card).find(".coordinates").text().split(",");

      //   var squareLayout = ymaps.templateLayoutFactory.createClass(
      //     `<div id="placemarkr-${idx}" data-idx="${idx}" class="map-marker"></div>`
      //   );

      //   var squarePlacemark = new ymaps.Placemark(
      //     coordinates,
      //     {
      //       hintContent: $(card).find(".page-buy-map__places-card__title").text(),
      //     },
      //     {
      //       iconLayout: squareLayout,
      //       // Описываем фигуру активной области "Прямоугольник".
      //       iconShape: {
      //         type: "Rectangle",
      //         // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
      //         coordinates: [
      //           [-25, -25],
      //           [25, 25],
      //         ],
      //       },
      //     }
      //   );

      //   squarePlacemark.events.add("mouseenter", function () {
      //     $(`#placemarkr-${idx}`).addClass("placemarkr-hover");
      //   });

      //   squarePlacemark.events.add("mouseleave", function () {
      //     $(`#placemarkr-${idx}`).removeClass("placemarkr-hover");
      //   });

      //   squarePlacemark.events.add("click", function (e) {
      //     if ($(`#placemarkr-${idx}`).hasClass("is-active")) return;

      //     $(".map-marker").removeClass("is-active");

      //     $(`#placemarkr-${idx}`).addClass("is-active");

      //     $mapCard.html($cards.eq(idx).html());
      //     $mapCardWrapper.addClass("opened");
      //   });

      //   // map.geoObjects.add(
      //   //   new ymaps.Placemark(
      //   //     [options.lat, options.lng],
      //   //     {},
      //   //     {
      //   //       iconLayout: "default#image",
      //   //       iconImageHref: options.icon,
      //   //       iconImageSize: [40, 60],
      //   //       iconImageOffset: [-20, -60],
      //   //     }
      //   //   )
      //   // );

      //   map.geoObjects.add(squarePlacemark);

      //   // const marker = new ymaps.Plasemark(
      //   //   [55.85419564595946, 37.55125296383254],
      //   //   {
      //   //     hintContent: "Метка",
      //   //   },
      //   //   {
      //   //     iconLayout: markerLayout,
      //   //     iconShape: {
      //   //       type: "Rectangle",
      //   //       // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
      //   //       coordinates: [
      //   //         [-25, -25],
      //   //         [25, 25],
      //   //       ],
      //   //     },
      //   //   }
      //   // );
      // });

      // map.setBounds(map.geoObjects.getBounds(), { checkZoomRange: true }).then(function () {
      //   if (map.getZoom() > 10) map.setZoom(10); // Если значение zoom превышает 15, то устанавливаем 15.
      // });

      // var markerLayout = ymaps.templateLayoutFactory.createClass('<div id="placemarkr" class="placemarkr">$</div>');

      // map.geoObjects.add(
      //   new ymaps.Plasemark(
      //     [55.85419564595946, 37.55125296383254],
      //     {
      //       hintContent: "Метка",
      //     },
      //     {
      //       iconLayout: markerLayout,
      //       iconShape: {
      //         type: "Rectangle",
      //         // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
      //         coordinates: [
      //           [-25, -25],
      //           [25, 25],
      //         ],
      //       },
      //     }
      //   )
      // );

      // Создание метки с квадратной активной областью.
      map.container.fitToViewport();
    });
  });

  // $mapCardClose.on("click", function () {
  //   $mapCardWrapper.removeClass("opened");
  //   $(".map-marker").removeClass("is-active");
  // });
}
