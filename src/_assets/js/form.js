function postRequest (url, content, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = function() { // Call a function when the state changes.
	    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
	    	if (callback)
	        	callback(this.response);
	    }
	}

	xhr.send(content);
};

(function () {
	var form = document.querySelector('form');

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		var content = {};
		Array.from(this.elements).forEach(function (item) {
			if (item.id && item.id.length > 0) {
				content[item.id] = item.value;
			}
		});

		content = JSON.stringify(content);

		postRequest(this.action, content, function (res) { 
			window.location = '/#confirm';
		});
	});
}());