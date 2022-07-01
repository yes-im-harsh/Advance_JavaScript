const myError = new Error("oopsie !");

myError.name; // "Error"
myError.message; // "oopsie"
myError.stack; // "Error: oopsie at <anonymous>:1:17

function a() {
  const b = new Error("uh oh");
  return b;
}

a();

//OutPut:
// Error: uh oh
//     at a (<anonymous>:8:13)
//     at <anonymous>:12:1

a().stack;

//Output:
// 'Error: uh oh\n    at a (<anonymous>:8:13)\n    at <anonymous>:1:1'

a().name;

//Output:
// 'Error'

a().message;

//Output
// 'uh oh'
