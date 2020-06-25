'use strict';

var button = document.querySelector('.page-header__toggle');
var menu = document.querySelector('.page-header__nav-wrapper');
var logo = document.querySelector('.page-header__logo-img');

button.classList.add('page-header__toggle--open');
menu.classList.add('page-header__closed');
logo.classList.add('page-header__logo--white');

var closeMenu = function () {
  menu.classList.toggle('page-header__closed');
  button.classList.toggle('page-header__toggle--close');
  button.classList.toggle('page-header__toggle--open');
  logo.classList.toggle('page-header__logo--white');
};

button.addEventListener('click', closeMenu);
