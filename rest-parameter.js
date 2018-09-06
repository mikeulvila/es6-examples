const colors = require('colors');
/*******************
 * Rest Parameter
 *******************/

// function f1(a, b) {
// 	let last = arguments.pop(); // ERROR (arguments.pop is not a function)
// 	console.log('f1'.yellow.underline, last);
// }
//f1('hello', 'world');
// Now we can easily gain access to a normal array using a rest parameter

// function f2(...args) {
// 	let last = args.pop(); // OK, gives the last argument
// 	console.log('f2'.yellow.underline, last);
// }
// f2('hello', 'world');

// function sum(...args) {
// 	let result = 0;
// 	for (let i = 0, l = args.length; i < l; i++) {
// 		result += args[i];
// 	}
// 	return result;
// }
//
// console.log('sum'.yellow.underline, sum(1,2,3,4));