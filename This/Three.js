function whichName() {
  console.log(this.name);
}

var name = "window";

const obj1 = {
  name: "Obj 1",
  whichName,
};

const obj2 = {
  name: "Obj 2",
  whichName,
};

whichName();
obj1.whichName();
obj2.whichName();
