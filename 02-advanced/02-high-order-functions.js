console.group("High Order Functions");

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;

const compute = (num1, num2, operation) => operation(num1, num2);

console.log(compute(2, 3, add));
console.log(compute(2, 3, subtract));
console.log(compute(2, 3, multiply));

console.groupEnd();