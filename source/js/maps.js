const $cards = $(".page-buy-map__places-cards .page-buy-map__places-card");
const $mapCard = $(".page-buy-map__places-map .page-buy-map__places-card");
const $mapCardWrapper = $(".page-buy-map__places-map-card");
const $mapCardClose = $(".page-buy-map__places-map-card .close");

if ($cards.length > 0) {
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
        $(".contacts__map")[0],
        {
          center: $cards.eq(0).find(".coordinates").text().split(","),
          zoom: $(".contacts__map").data().zoom,
          controls: ["zoomControl"],
        },
        {}
      );

      $cards.each((idx, card) => {
        const coordinates = $(card).find(".coordinates").text().split(",");

        var squareLayout = ymaps.templateLayoutFactory.createClass(
          `<div id="placemarkr-${idx}" data-idx="${idx}" class="map-marker"></div>`
        );

        var squarePlacemark = new ymaps.Placemark(
          coordinates,
          {
            hintContent: $(card).find(".page-buy-map__places-card__title").text(),
          },
          {
            iconLayout: squareLayout,
            // Описываем фигуру активной области "Прямоугольник".
            iconShape: {
              type: "Rectangle",
              // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
              coordinates: [
                [-25, -25],
                [25, 25],
              ],
            },
          }
        );

        squarePlacemark.events.add("mouseenter", function () {
          $(`#placemarkr-${idx}`).addClass("placemarkr-hover");
        });

        squarePlacemark.events.add("mouseleave", function () {
          $(`#placemarkr-${idx}`).removeClass("placemarkr-hover");
        });

        squarePlacemark.events.add("click", function (e) {
          $mapCard.html($cards.eq(idx).html());
          $mapCardWrapper.addClass("opened");
        });

        // map.geoObjects.add(
        //   new ymaps.Placemark(
        //     [options.lat, options.lng],
        //     {},
        //     {
        //       iconLayout: "default#image",
        //       iconImageHref: options.icon,
        //       iconImageSize: [40, 60],
        //       iconImageOffset: [-20, -60],
        //     }
        //   )
        // );

        map.geoObjects.add(squarePlacemark);

        // const marker = new ymaps.Plasemark(
        //   [55.85419564595946, 37.55125296383254],
        //   {
        //     hintContent: "Метка",
        //   },
        //   {
        //     iconLayout: markerLayout,
        //     iconShape: {
        //       type: "Rectangle",
        //       // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
        //       coordinates: [
        //         [-25, -25],
        //         [25, 25],
        //       ],
        //     },
        //   }
        // );
      });

      if ($(window).outerWidth >= 768) {
        map.container.getElement().style.height = "704px";
        map.container.getElement().parentNode.style.height = "704px";
      } else {
        map.container.getElement().style.height = "500px";
        map.container.getElement().parentNode.style.height = "500px";
      }

      map.setBounds(map.geoObjects.getBounds(), { checkZoomRange: true }).then(function () {
        if (map.getZoom() > 15) map.setZoom(15); // Если значение zoom превышает 15, то устанавливаем 15.
      });

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
    });
  });

  $mapCardClose.on("click", function () {
    $mapCardWrapper.removeClass("opened");
  });
}
