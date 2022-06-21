// It asks global scope for height.
// Global scope says: ummm... no but here I just created it for you.
// We call this leakage of global variables.
// Adding 'use strict' to the file prevents this and causes an error.

function weird() {
  height = 50;
}
var heyhey = function doodle() {
  // code here
};
heyhey();
doodle(); // Error! because it is enclosed in its own scope.
