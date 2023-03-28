function debounce(func, ms) {
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, ms, event);
  };
}

export { debounce };
