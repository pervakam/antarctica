'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});




// 'use strict';
//
// var menuButton = document.querySelector('.main-nav__popup-toggle');
// var button = document.querySelector('.main-nav__toggle');
// var menu = document.querySelector('.main-nav__list');
// var buttonBuyTour = document.querySelectorAll('.buy-tour');
// var buyTourPopup = document.querySelector('.buy-tour-popup');
// var closePopupButton = document.querySelector('.buy-tour-popup__close-button');
//
// var closePopup = function () {
//   buyTourPopup.classList.add('hide-popup');
// };
//
// menuButton.classList.add('main-nav__popup-button');
// menu.classList.add('close-popup');
//
// button.onclick = function () {
//   menu.classList.toggle('close-popup');
//   button.classList.toggle('main-nav__toggle--closed');
//   button.classList.toggle('main-nav__toggle--opened');
//   menuButton.classList.toggle('main-nav__popup-button');
// };
//
// buttonBuyTour.forEach(function (it) {
//   it.addEventListener('click', function () {
//     buyTourPopup.classList.remove('hide-popup');
//   });
// });
//
// closePopupButton.addEventListener('click', closePopup);
//
// window.addEventListener('keydown', function (evt) {
//   if (evt.key === 'Escape') {
//     evt.preventDefault();
//     closePopup();
//   }
// });
