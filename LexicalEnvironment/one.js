function one() {
 var isValid = true; // local env
 two(); // new execution context
}
function two() {
 var isValid; // undefined
}
var isValid = false; // global
one();
/* 
 two() isValid = undefined
 one() isValid = true
 global() isValid = false
 ------------------------
 call stack
*