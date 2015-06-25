;(function($){
	$.fn.cache.getItem = function(key){
		var item = localStorage.getItem(key);

		if (item) {
			try {
				item = JSON.parse(item);
			} catch(e) {
				alert('JSON parse error');
				return undefined;
			}
		} else {
			return undefined;
		}

		return item;
	}

	$.fn.cache.setItem = function(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
		return getItem(key);
	}

	$.fn.cache.removeItem = function(key){
		localStorage.removeItem(key);
	}
})(Zepto)