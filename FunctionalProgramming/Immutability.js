//Bad Way
const obj = {
  name: "Harsh",
};

function clone(obj) {
  return { ...obj }; //This is pure
}

obj.name = "Harsh chauhan"; //By doing this original Object will, It will mutate the original State.

//Better Code
function updateName(obj) {
  const newObj = clone(obj);
  newObj.name = "Harsh Chauhan"; // By doing this, you kept the global state Immutable.
  return newObj;
}

const updateNameObj = updateName(obj);
