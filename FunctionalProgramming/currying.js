//Currying

const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(2)(3);

//Uses.
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(1));
console.log(multiplyBy5(2));
console.log(multiplyBy5(3));
console.log(multiplyBy5(4));
