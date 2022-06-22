//Arrow Function:- They are a compact alternative to a regular function, but also
// without its own bindings to this, arguments, super,
// or new.target keywords. Arrow functions cannot be used as constructors
// and are not the best option for methods.

var obj = {
  i: 10,
  a: () => console.log("a", this.i, this),
  b: function () {
    console.log("b", this.i, this);
  },
};

obj.a();
obj.b();
