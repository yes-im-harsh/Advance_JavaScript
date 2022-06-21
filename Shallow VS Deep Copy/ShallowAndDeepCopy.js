/* Shallow copy: Shallow copy is a bit-wise copy of an object. A new object is 
created that has an exact copy of the values in the original object. If any of 
the fields of the object are references to other objects, just the reference 
addresses are copied i.e., only the memory address is copied.
> Deep copy: A deep copy copies all fields, and makes copies of dynamically 
allocated memory pointed to by the fields. A deep copy occurs when an 
object is copied along with the objects to which it refers. */

const originalObj = {
  nested: {
    nestedKey: "nestedValue",
  },
  key: "value",
};
// originalObj points to location 1 in memory
const assignObj = originalObj;
// assignObj will point to 1 in memory
const shallowObj = { ...originalObj };
// shallowObj points to a new location 2, but references location 1 for the nested
object;
const deepObj = JSON.parse(JSON.stringify(originalObj));
// deepObj clones all parts of the object to a new memory address
