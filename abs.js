/**
 * numOperation
 * @argument operator String
 * @argument a Integer
 * @argument b Integer
 * @returns Boolean
 *
 * This function abstracs the logic operations
 * ==
 * >=
 * <=
 * >
 * <
 */
const numOperation = (operator, a, b) => {
	switch(operator) {
		case '==':
			return a == b;
		case '<=':
			return a <= b;
		case '>=':
			return a >= b;
		default:
			return new Error('not implemented');
	}
}

console.log('numOperation ==', numOperation('==', 5, 6));
console.log('numOperation >=', numOperation('>=', 16, 6));

const toCOP = (curr, value) => {
	const USD_RATIO = 3000;
	const EUR_RATIO = 4000;
	const BTC_RATIO = 20000000;

	let rate;
	switch(curr.toUpperCase()) {
		case 'USD':
			rate = USD_RATIO;
			break;
		case 'EUR':
			rate = EUR_RATIO;
			break;
		case 'BTC':
			rate = BTC_RATIO;
			break;
		default:
			return new Error('not supported');
	}

	return value * rate;
}

const toCOP2 = (curr, value) => {
	const listing = {
		"USD": 3000,
		"EUR": 4000,
	};

	return value * listing[curr.toUpperCase()];
}

console.log('USD', toCOP2('usD', 3));

console.log('EUR', toCOP('eur', 3));
console.log('BTC', toCOP('Btc', 3));

