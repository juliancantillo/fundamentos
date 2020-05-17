const {cons, isEmpty, first, rest} = require('functional-light');

function insertL(list, num){
  if(isEmpty(list)){
		return cons(num, []);
	}else if(first(list) > num){
    return cons(num, list);
  }
  return cons(first(list), insertL( rest(list) , num))
}


const l = [];

const l2 = insertL(l, 5);
console.log(l2);

const l3 = insertL(l2, 3);
console.log(l3);

const l4 = insertL(l3, 2);
console.log(l4);
