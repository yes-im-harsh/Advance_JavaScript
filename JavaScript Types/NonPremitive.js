/* Non Primitive - The only type that leaves us with is objects. Objects are able to be 
mutated and their properties are passed by reference, meaning their properties are not 
stored separately in memory. A new variable pointing to an object will not create a copy, 
but reference the original objects location in memory. Therefore, changing the 2nd 
object will also change the first. */

//Objects are passed by reference
let obj1 = {
  name: "Harsh",
};

let newObj = obj1; // points to same place in memory as obj1
newObj.name = "Harsh Chauhan"; // modifies the memory

console.log(obj1); //Harsh Chauhan
console.log(newObj); //Harsh Chauhan
//They are both modified "Passed my reference"

let arr = [1, 2, 3];

let newArr = arr;
newArr.push(4);

console.log(arr); //[1,2,3,4]
console.log(newArr); //[1,2,3,4]
