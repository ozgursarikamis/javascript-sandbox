// outer function

function outer() {
let name = 'Tyler';

    // inner function
    const authName = () => "Welcome " + name;
    return authName;
};

const auth = outer();
console.log(auth());

///////////////// Track the number of clicks on button:

const updateClickCounter = () => {
    var counter = 0;
    return counter++;
}

console.log(updateClickCounter());
console.log(updateClickCounter());
console.log(updateClickCounter());


// Use closure instead:

const closureUpdateclickCounter = () => {
    var counter = 1;

    // inner function:
    const incrementCounter = () => counter++;

    // return inner function:
    return incrementCounter;
}

const clickCounter = closureUpdateclickCounter();
console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());