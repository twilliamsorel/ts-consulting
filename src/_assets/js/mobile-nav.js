(function () {
	var navToggle = document.querySelector('[data-nav-toggle]');
	var mobileNav = document.querySelector('.mobile-nav');
	var mobileNavList = mobileNav.querySelector('ul');
	var closeNavButton = document.querySelector('[data-close-nav]');

	var closeNav = function () {
		mobileNav.style.background = 'rgba(255, 255, 255, 0)';
		mobileNavList.style.opacity = '0';
		setTimeout(function () {
			mobileNav.style.display = 'none';
		}, 400);
	};

	navToggle.addEventListener('click', function () {
		if (mobileNav.style.display !== 'block') {
			mobileNav.style.display = 'block';
			setTimeout(function () {
				mobileNav.style.background = 'rgba(255, 255, 255, .95)';
			}, 10);
			setTimeout(function () {
				mobileNavList.style.opacity = '1';
			}, 100);
		} else {
			closeNav();
		}
	});

	closeNavButton.addEventListener('click', closeNav);
}());