const { isEmpty, first, rest, cons } = require('functional-light');
/**
 *
 */
function num(list){
	if(isEmpty(list)){
		return [];
	}

	if(typeof first(list) != 'number') {
		return num(rest(list));
	}

	return cons(first(list), num(rest(list)));
}

console.log(num([]))
console.log(num(['a']))
console.log(num(['a', 1]))
console.log(num([6, 'b']))
console.log(num([6, 1, 2, 3, 4, 5, 6, 7, 8, 'ilasdf', 'ia']))
console.log(num([6, 'b', 'esto ya no me importa']))
console.log(num([6, 'b', 1, 2, true, 'b', false, -2]))
