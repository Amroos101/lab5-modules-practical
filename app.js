import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

console.log('add: ', add(5, 3));
console.log('subtract: ', subtract(10, 4));
console.log('uppercase: ', toUpperCase('hello'));
console.log('lowercase: ', toLowerCase('HELLO'));

console.log('multiply: ', multiply(4, 5));

console.log('max: ', findMax([1, 2, 3, 4, 5]));
console.log('reversed: ', reverseArray([1, 2, 3]));

addAndLogUpper(10, 20);
let numbers = [3, 7, 2, 9, 4];
let biggest = findMax(numbers);
let multiplied = multiply(biggest, 2);
let final = toUpperCase(multiplied.toString());
console.log('final challenge result: ', final);
