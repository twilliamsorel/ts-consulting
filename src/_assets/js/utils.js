var recurseDOM = function (last, callback) {
	callback(last);
	
	if (last.parentElement) {
		recurseDOM(last.parentElement, callback);
	}
};
