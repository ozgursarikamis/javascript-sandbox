// Recursion is a function that calls itself.

const incrementByOne = (num) => {
    for (let i = num; i < 11; i++) {
        console.log(i);
    }
}

incrementByOne(1);

console.group("Recursion");

const incrementByOneRecursion = (num) => {
    if (num > 10) {
        return;
    }

    console.log(num);
    incrementByOneRecursion(num + 1);
}

incrementByOneRecursion(1);

console.groupEnd();