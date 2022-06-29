// create our own COMPOSE function
const compose = (fn1, fn2) => (data) => fn1(fn2(data));

// create our own PIPE function
const pipe = (fn1, fn2) => (data) => fn2(fn1(data));

const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);

//using Compose
const composefun = compose(multiplyBy3, makePositive);
const pipefun = pipe(multiplyBy3, makePositive);

console.log(composefun(-5));
console.log(pipefn(-5));
