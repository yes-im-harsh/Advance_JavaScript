var b = {
  name: "jay",
  say() {
    console.log(this);
  },
};
var c = {
  name: "jay",
  say() {
    return function () {
      console.log(this);
    };
  },
};
var d = {
  name: "jay",
  say() {
    return () => console.log(this);
  },
};
b.say();
c.say();
c.say()();
d.say();
d.say()();

//---------Solution--------//

b.say(); // b {name: 'jay', say()...}
// b called the function

c.say(); // function() {console.log(this)}
// returned a function that gets called later
c.say()(); // Window {...}
// c.say() gets the function and the Window runs it
d.say(); // () => console.log(this)
// returned the arrow function
d.say()(); // d {name: 'jay', say()...}
// arrow function does not rebind this and inherits this from parent
