// Function Execution Context creates arguments object
function showArgs(arg1, arg2) {
  console.log("arguments: ", arguments);
  return `argument 1 is: ${arg1} and argument 2 is: ${arg2}`;
}
showArgs("hello", "world");
// arguments: { 0: 'hello', 1: 'world' }
// argument 1 is hello and argument 2 is world
function noArgs() {
  console.log("arguments: ", arguments);
}
noArgs();
// arguments: {}
// even though there are no arguments, the object is still created
