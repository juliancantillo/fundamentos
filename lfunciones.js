const { cons, first, rest, isEmpty, isList } = require('functional-light');



/**
 * contrato:<lfuncion>(<><list><number>)<number><number>--><lista>
 */
var lfunciones= cons((a,b)=>a+b, cons((a,b)=>a-b, cons((a,b)=>a*b, [])));

console.log(lfunciones);

const lfuncion=(lfunciones, a, b)=>{
  if(isEmpty(lfunciones)){
    return [];
  }else{
    var out = first(lfunciones);

    return cons(out(a, b), lfuncion(rest(lfunciones), a , b));
  }
}

console.log('>', lfuncion(lfunciones, 2, 5));


