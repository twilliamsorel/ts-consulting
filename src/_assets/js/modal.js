(function () {
	var urlHash = window.location.hash;
	var modal = document.querySelector('.modal');
	var modalBox = modal.querySelector('.box');

	if (urlHash && urlHash === '#confirm') {
		modal.style.display = 'block';
		setTimeout(function () {
			modalBox.style.top = '25%';
		}, 10);
	}

	modal.addEventListener('click', function (e) {
		if (e.target.classList.contains('modal')) {
			modalBox.style.top = '-25%';
			modal.style.display = 'none';
		}
	});
}());