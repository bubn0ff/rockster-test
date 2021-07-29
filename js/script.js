var burger = document.querySelector('.menu__btn');
var menu = document.querySelector('.menu__list');

if (burger) {
  burger.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
  })
}