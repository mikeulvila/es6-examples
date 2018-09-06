const colors = require('colors');
// get the “rest of the properties” from an object
// let {a, b, c, ...x} = {a: 1, b: 2, c: 3, x: 4, y: 5, z: 6};
//
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
//
// console.log(x); // { x: 4, y: 5, z: 6 }

// “re”-structure multiple objects into a new object
// let a = 1, b = 2, c = 3;
// let x = {x: 4, b: 5, z: 6};
//
// let obj = {a, b, c, ...x};
//
// console.log(obj); //{a: 1, b: 2, c: 3, x: 4, y: 5, z: 6};

// last one in wins
// let car = {
// 	make: 'Toyota',
// 	model: 'Camry',
// 	year: '2004'
// };
// let newYear = { year: '2018' };
// let newCar = { ...car, ...newYear };
// console.log('New Car'.yellow.underline, newCar);
