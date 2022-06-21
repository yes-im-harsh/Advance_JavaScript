const obj = {
  name: "Harsh Chauhan",
  codes() {
    console.log("a", this);
    function codesJavascript() {
      console.log("b", this);
    }
    codesJavascript();
  },
};
obj.codes();

//Output:
// a {name: 'Harsh Chauhan', codes: ƒ}
// b Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

/* In the example above, the obj called sing() and then anotherFunc() was called within the 
sing() function. In JavaScript, that function defaults to the Window object. It happens 
because everything in JavaScript is lexically scoped except for the this keyword. It 
doesn't matter where it is written, it matters how it is called. Changing anotherFunc() 
instead to an arrow function will fix this problem, as seen below. Arrow functions do not 
bind or set their own context for this. If this is used in an arrow function, it is taken from 
the outside. Arrow functions also have no arguments created as functions do. */

const obj = {
  name: "Harsh Chauhan",
  codes() {
    console.log("a", this);
    var codesJavascript = () => {
      console.log("b", this);
    };
    codesJavascript();
  },
};

obj.codes();

//Output:
// a {name: 'Harsh Chauhan', codes: ƒ}
// b {name: 'Harsh Chauhan', codes: ƒ}
