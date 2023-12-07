// Function composition:

// Function composition is the process of combining two or more functions
// in order to produce a new function or perform some computation. 

// For example, the composition f . g is equivalent to f(g(x)).

const compose = (f,g) => (data) => f(g(data));

const getAge = user => user.age;
const isAllowedAge = age => age >= 18;

const user = { name: 'Wesley', age: 24 };
const isAllowedToDrink = compose(isAllowedAge, getAge);

console.log(isAllowedToDrink(user)); // true

////////

const tripple = num => num * 3;
const cube = num => num * num * num;

const out = compose(tripple, cube)(5);
console.log(out); // 375


// Benefits of function composition:

// 1. Less code
// 2. Improves code readability
// 3. Chain of functions, and can easily add or remove links
// 4. Frameworks like React use composition by wrapping a component around another component