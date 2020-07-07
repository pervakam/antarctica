'use strict';

(function () {

  var button = document.querySelector('.page-header__toggle');
  var menu = document.querySelector('.page-header__nav-wrapper');
  var logo = document.querySelector('.page-header__logo-fill');
  var telField = document.getElementById('tel-field');
  var cruisesItem = document.querySelectorAll('.cruises__item');

  var closeMenu = function () {
    menu.classList.toggle('page-header__closed');
    button.classList.toggle('page-header__toggle--close');
    button.classList.toggle('page-header__toggle--open');
    logo.classList.toggle('page-header__logo-fill--white');
  };

  var activateMobile = function () {
    button.classList.add('page-header__toggle--open');
    menu.classList.add('page-header__closed');
    menu.classList.add('page-header__nav-modal');
    logo.classList.add('page-header__logo-fill--white');

    button.addEventListener('click', closeMenu);
  };

  if (menu) {
    activateMobile();
  }

  if (telField) {
    telField.onkeydown = function (evt) {
      return !(/^[А-Яа-яA-Za-z ]$/.test(evt.key));
    }
  }


  cruisesItem.forEach(function (it) {
    it.addEventListener('click', function () {
      var cruisesCard = it.querySelector('.cruises__card');
      var cardTitle = it.querySelector('.cruises__item-title');

      cruisesCard.classList.toggle('cruises__card--open');
      cardTitle.classList.toggle('cruises__item-title--close');

      if (window.innerWidth <= 1023) {
        it.classList.remove('cruises__item-hover');
      } else {
        it.classList.toggle('cruises__item-hover');
      }
    })
  });

})();
