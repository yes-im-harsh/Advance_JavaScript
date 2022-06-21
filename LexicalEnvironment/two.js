var x = "x";

function findMyName() {
  console.log(x);
  var b = "b";
  return printMyName();
}

function printMyName() {
  var c = "c";
  return "Harsh Chauhan";
}

function sayMyName() {
  var a = "a";
  return findMyName();
}

sayMyName();
