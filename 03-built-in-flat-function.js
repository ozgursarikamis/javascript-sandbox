// flat() is a built-in function in JavaScript
// It is used to flatten an array of arrays into a single array

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const flattened = arr.flat(2);
console.log('flat(2)', flattened);
console.log('flat(3)', flattened.flat(3));
console.log('flat(Infinity)', flattened.flat(Infinity));

// flatMap() is a built-in function in JavaScript
// It is used to flatten and map an array of arrays into a single array

const arr2 = [1, 2, 3, 4];
const flattened2 = arr.flatMap(num => [num * 2]);
console.log(flattened2); // [2, 4, 6, 8]