$(document).on('click', '.header__bottom-location', function() {
  const list = $('#location .location__list ul');
  const checked = $('#location .location__list input:checked');

  const delta = checked.offset().top - list.offset().top;
  list.scrollTop(delta);
})
