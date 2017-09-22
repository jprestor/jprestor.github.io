var navMain = document.querySelector('.main-nav');
var pageHeaderLogo = document.querySelector('.page-header__logo')
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
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


		
