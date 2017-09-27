
var navMain = document.querySelector('.main-nav');
var pageHeaderLogo = document.querySelector('.page-header__logo')
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
		pageHeaderLogo.classList.remove('page-header__logo--closed');
		pageHeaderLogo.classList.add('page-header__logo--opened');
	} else {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
		pageHeaderLogo.classList.remove('page-header__logo--opened');
		pageHeaderLogo.classList.add('page-header__logo--closed');
	}
});

var arrowLeft = document.querySelector('.reviews__arrow-left');
var arrowRight = document.querySelector('.reviews__arrow-right')


arrowLeft.addEventListener('click', function () {
	if (arrowLeft.classList.contains('left-1')) {
		arrowLeft.classList.remove('left-1');
		arrowLeft.classList.add('left-2');
	} else {
		arrowLeft.classList.remove('left-2');
		arrowLeft.classList.add('left-1');
	}
});

arrowRight.addEventListener('click', function () {
	if (arrowRight.classList.contains('right-1')) {
		arrowRight.classList.remove('right-1');
		arrowRight.classList.add('right-2');
	} else {
		arrowRight.classList.remove('right-2');
		arrowRight.classList.add('right-1');
	}
});
