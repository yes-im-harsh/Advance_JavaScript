//Bad Way
const obj = {
  name: "Harsh",
};

function clone(obj) {
  return { ...obj };
}

obj.name = "Harsh chauhan"; //By doing this original Object will, It will mutate the original State.

//
function updateName(obj) {
  const newObj = clone(obj);
  newObj.name = "Harsh Chauhan";
  return newObj;
}

const updateNameObj = updateName(obj);
console.log(`obj = ${obj}`, `updateNameObj = ${updateNameObj}`);
