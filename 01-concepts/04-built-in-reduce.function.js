// reduce is a built-in function that takes a callback function and an initial value

const initialArray = [1, 2, 3, 4, 5];

const multiply = initialArray.reduce(
    (accumulator, currentValue) => {
        return accumulator * currentValue;
    },
);

console.log(multiply); // 120