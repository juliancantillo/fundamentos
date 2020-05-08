const { isEmpty, cons, first, rest } = require('functional-light');

const l = [ 3, 5, 3, 4 ];

/**
 *
 * [ 3, 5, 3, 4 ]
 *
 * if 3 < 5
 * 	s = [ 3 ]; r = [ 5, 3, 4 ]; buff = Inf;
 *
 * if 5 < 3
 * 	s = [ 3 ]; r = [ 3, 4 ]; buff = 5;
 *
 * if buff(5) < 3
 * 	// algo
 * if 3 < 4
 * 	s = [ 3, 3 ]; r = [ 4 ]; buff = 5;
 *
 * if buff(5) < 4
 *  // algo
 *
 * if isEmpty(rest(r))
 * 	s = [ buff, 4, 3, 3 ]; []; buff=Inf
 *
 *
 */

function sortedAL(list) {
	return helper(list, [], Infinity);
}

function helper(list, sortedList, buffer) {
	debugger;
	if (isEmpty(list)) {
		return sortedList;
	}

	const firstList = first(list)

	if (buffer <= firstList) {
		return helper(list, cons(buffer, sortedList), Infinity);
	}

	if (isEmpty(rest(list)) && buffer != Infinity) {
		return helper(rest(list), cons(buffer, cons(firstList, sortedList)), Infinity);
	}

	if (isXltHead(firstList, list)) {
		return helper(rest(list), cons(firstList, sortedList), buffer);
	}

	return helper(rest(list), sortedList, firstList);
}

/**
 * Compare if the X value is lower than the head of the List
 */
function isXltHead(x, list) {
	return x <= first(rest(list));
}

console.log(sortedAL(l));
