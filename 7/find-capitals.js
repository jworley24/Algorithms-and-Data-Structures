var capitals = function (word) {
	return word.split('')
             .map(function(l, i) { if (l.toUpperCase() === l) return i; })
             .filter(function(i) { return i != null })
};