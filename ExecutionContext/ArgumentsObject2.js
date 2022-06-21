function showArgs(arg1, arg2) {
  console.log("arguments: ", arguments);
  return `argument 1 is: ${arg1} and argument 2 is: ${arg2}`;
}
showArgs("hello", "world");

function showArgs2(...args) {
  console.log("arguments: ", arguments);
  console.log(Array.from(arguments));
  return `${args[0]} ${args[1]}`;
}
showArgs2("Hello", "World");
