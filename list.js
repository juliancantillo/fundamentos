const { append, isEmpty, cons, first, length, rest } = require('functional-light');
/**
 *       0  1  2  3  4  5
 * l = [ 1, 2, 4, 5, 6, 7];
 *
 * elem, idx, list
 * 3,    2,    l
 *
 *       0  1  2  3  4  5  6
 * l = [ 1, 2, 3, 4, 5, 6, 7];
 *       2 === idx ?
 *
 * l[0] 0 === idx?
 * [ 0 ], l[1, 2, 3, 4, 5]
 *
 * l[1] 1 === idx?
 * l[0, 1], l[2, 3, 4, 5]
 *
 * l[2] 2 === idx?
 * L[ l[0, 1], elem, l[2, 3, 4, 5]]
 *
 * return L
 */

/**
 * Condición de salida:
 * - Cuando idx es igual a la posición de la lista
 */
function insert(elem, idx, list) {
	if (idx >= 0 && idx <= length(list)) {
		return iterate(idx, elem, list, [], 0);
	}

	return list
}

function iterate(idx, elem, oldList, newList, counter) {
	if (idx === counter) {
		return append(reverse(newList, []), cons(elem, oldList));
	}

	const firstElem = first(oldList);

	return iterate(idx, elem, rest(oldList), cons(firstElem, newList), counter + 1);
}

function reverse(list, r) {
	if (isEmpty(list)) {
		return r;
	}
	const firstElem = first(list);
	return reverse(rest(list), cons(firstElem, r));
}


// iterate(0, 2, []) ==> [2]
//
//const l = [ 1, 2, 4, 5, 6, 7];
const l = [ 3, 4];

console.log(insert(2, 2, l));



/**
 * cons(value, list)
 *
 * [ value, ...list ]
 *
 * value = 1
 * list = [2, 3, 4]
 *
 * return [ 1, 2, 3, 4 ]
 *
 */
