(function () {
	var nav = document.querySelector('nav.main');

	window.addEventListener('scroll', function (e) {
		if (e.pageY > 70) 
			nav.classList.add('fixed');
		else 
			nav.classList.remove('fixed');
	});
}());