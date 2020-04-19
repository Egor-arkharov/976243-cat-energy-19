var header = document.querySelector('.header__wrapper');
var toggleNav = document.querySelector('.header__toggle-nav');


toggleNav.addEventListener('click', function() {
  if (header.classList.contains('header__wrapper--opened')) {
    header.classList.remove('header__wrapper--opened');
  } else {
    header.classList.add('header__wrapper--opened');
  }
});
