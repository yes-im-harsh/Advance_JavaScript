/* Functions are objects in JavaScript, which is not true for other languages. Because of 
that, they can be called multiple ways, but they can also be constructors. A function 
constructor creates a new object and returns it. Every JavaScript function, is actually a 
function object itself */

(function () {}.constructor === Function);
//True

// Function constructor
new Function("optionalArguments", "functionBody");

const four = new Function("return four"); //Returns 4
const sum = new Function("x", "y", "return x+y");
console.log(sum(2, 3));

/* Almost everything in JavaScript can be created with a constructor. Even basic JavaScript 
types like numbers and strings can be created using a constructor. */

const four = new Number(4);
const assignFour = 4;

const string = new String("I am a programmer");
const assignString = "I am a programmer";

typeof four; //'object'
typeof assignFour; //'number'

typeof string; //'object'
typeof assignString; //'string'

four === assignFour; //false

// Notice how the types are different
// depending on how they are created.
// Arrays, Booleans, Dates, Objects, and Strings
// can be created this way as well.
