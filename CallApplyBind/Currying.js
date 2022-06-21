function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(4); //8

let multiplyByTen = multiply.bind(this, 10);
multiplyByTen(6); //10
