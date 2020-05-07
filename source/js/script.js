var header = document.querySelector('.header');
var toggleNav = document.querySelector('.header__toggle-nav');

var rangeBefore = document.querySelector('.stats__range--before');
var rangeAfter = document.querySelector('.stats__range--after');
var imgBefore = document.querySelector('.stats__img--before');
var imgAfter = document.querySelector('.stats__img--after');

header.classList.remove('header--nojs');

toggleNav.addEventListener('click', function() {
  if (header.classList.contains('header--opened')) {
    header.classList.remove('header--opened');
  } else {
    header.classList.add('header--opened');
  }
});

rangeBefore.addEventListener('click', function() {
  imgBefore.classList.remove('visually-hidden');
  imgAfter.classList.add('visually-hidden');
});

rangeAfter.addEventListener('click', function() {
  imgAfter.classList.remove('stats__img--nojs');
  imgBefore.classList.add('visually-hidden');
  imgAfter.classList.remove('visually-hidden');
});

// ymaps.ready(init);
// function init(){
//     var myMap = new ymaps.Map("map", {
//         center: [59.938979, 30.319472],
//         zoom: 17
//     });
// }
