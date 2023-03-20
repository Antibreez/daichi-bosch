import { Select2 } from "select2";

// $("select").select2({
//   placeholder: "Все",
//   minimumResultsForSearch: Infinity,
// });

$(".select").each((idx, item) => {
  const ph = $(item).attr("aria-placeholder") || "Все";

  $(item).select2({
    placeholder: ph,
    minimumResultsForSearch: Infinity,
  });
});

// $("select").select2({
//   placeholder: ph,
//   minimumResultsForSearch: Infinity,
// });
