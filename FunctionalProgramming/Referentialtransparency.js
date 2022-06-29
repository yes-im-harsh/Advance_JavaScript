// Referential transparency: The ability to replace the expression with an existing value,
// without changing the result of the program.

function a(num1, num2) {
  return num1 + num2;
}

function b(num) {
  return n * 2;
}

b(a(2, 3)); // 10,
// here a will always return 7,

//so it could be changed to
b(5); //10
