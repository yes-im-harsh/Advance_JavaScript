const obj = {
  property: `I'm a property of obj.`,
  method: function () {
    // this refers to the object obj
    console.log(this.property);
  },
};
obj.method();
// I'm a property of obj.

// obj is to the left of the dot
// obj.method();
