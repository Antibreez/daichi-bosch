const total = $(".about-brand__production-benefits-item").length;
const part = Math.ceil(total / 2);

$(".about-brand__production-benefits-item").each((idx, item) => {
  const order = idx < part ? (idx + 1) * 2 - 1 : (idx + 1 - part) * 2;
  $(item).css("order", order);

  if (idx < part) {
    $(item).addClass("gap");
  }
});
