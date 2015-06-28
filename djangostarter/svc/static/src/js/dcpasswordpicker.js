var getPassword =  function(){
	var specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
	var lowercase = 'abcdefghijklmnopqrstuvwxyz';
	var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var numbers = '0123456789';
	var pick = function(type,min, max) {
	    var n, chars = '';
	    if (typeof max === 'undefined') {
	        n = min;
	    } else {
	        n = min + Math.floor(Math.random() * (max - min));
	    }
	    for (var i = 0; i < n; i++) {
	        chars += type.charAt(Math.floor(Math.random() * type.length));
	    }
	    return chars;
	};
	var shuffle = function(type) {
	    var array = type.split('');
	    var tmp, current, top = array.length;
	    if (top) while (--top) {
	        current = Math.floor(Math.random() * (top + 1));
	        tmp = array[current];
	        array[current] = array[top];
	        array[top] = tmp;
	    }
	    return array.join('');
	};
	var all = specials + lowercase + uppercase + numbers;
	var password = shuffle((pick(specials,1) + pick(lowercase,1) + pick(uppercase,1) + pick(all,3, 10)))
	return password;
};