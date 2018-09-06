const colors = require('colors');
/*******************
 * Object Literal Extensions
 *******************/
// const person = {
// 	name: 'Mike',
// 	age: 37,
// 	getName: function() {
// 		return this.name;
// 	}
// };
//
// console.log('person'.yellow.underline, person);
// console.log('getName'.yellow.underline, person.getName());

// let name = 'Mike';
// let age = 37;
//
// const person = {
// 	name,
// 	age,
// 	getName() {
// 		return this.name;
// 	}
// };
//
// console.log('person'.yellow.underline, person);
// console.log('getName'.yellow.underline, person.getName());

// METHOD NAMES AS STRINGS
// const obj = {
// 	'my method'() {
// 		return 'Still works!'
// 	}
// };
// console.log('my method'.yellow.underline, obj['my method']());

// Dynamic fields
// let ageField = 'age';
// const obj = {
// 	[ageField]: 37
// };
// console.log('age'.yellow.underline, obj.age);
// console.log('age'.yellow.underline, obj["age"]);
// console.log('age'.yellow.underline, obj[ageField]);