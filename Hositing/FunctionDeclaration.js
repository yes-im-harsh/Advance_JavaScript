// function declaration gets hoisted
function a() {
  console.log("hi");
}
// function declaration get rewritten in memory
function a() {
  console.log("bye");
}
console.log(a());
// bye
