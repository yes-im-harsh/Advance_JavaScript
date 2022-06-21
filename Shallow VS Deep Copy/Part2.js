const originalObj = {
  nested: {
    nestedKey: "nestedValue",
  },
  key: "Value",
};

const assignObj = originalObj;
const shallowObj = { ...originalObj };
const deepObj = JSON.parse(JSON.stringify(originalObj));

console.log("originlObj", originalObj);
console.log("assignlObj", assignObj);
console.log("shallowObj", shallowObj);
console.log("deepObj", deepObj);

/*
originalObj: {nested: {
 nestedKey: "changed value"
 }, 
 key: "changed value"}


assignObj: {nested: {
 nestedKey: "changed value"
 }, 
 key: "changed value"}


shallowObj: {nested: {
 nestedKey: "changed value"
 }, 
 key: "value"}


deepObj: {nested: {
 nestedKey: "nestedValue"
 }, 
 key: "value"}
*/

//Note*
/*If you try to check if 2 objects with the same properties are 
equal with obj1 = obj2, it will return false. It does this because each object 
has its own address in memory as we learned about. The easiest way to 
check the contents of the objects for equality is this. */
JSON.stringify(obj1) === JSON.stringify(obj2);
/* This will return true if all properties are the same. */

const obj1 = {
  name: "Harsh",
  property: "Programmar",
};

const obj2 = {
  name: "Harsh",
  property: "Programmar",
};

obj1 === obj2; //will give "False"
JSON.stringify(obj1) === JSON.stringify(obj2); //will give "True"
