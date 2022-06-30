//Arity:- It means number of arguments a function takes.

// We use Compose and pipe to combine to multiple function.
// These are not included in JavaScript, but many library uses it.
// We can make our own compose function

// create our own COMPOSE function
const compose = (fn1, fn2) => (data) => fn1(fn2(data));

// create our own PIPE function
const pipe = (fn1, fn2) => (data) => fn2(fn1(data));

const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);

//// use compose and pipe to combine multiple functions
const composefun = compose(multiplyBy3, makePositive);
const pipefun = pipe(multiplyBy3, makePositive);

console.log(composefun(-5));
console.log(pipefn(-5));

// essentially we are doing this
// fn1(fn2(fn3(5)))
// compose(fn1, fn2, fn3)(5)
// pipe(fn3, fn2, fn1)(5)
