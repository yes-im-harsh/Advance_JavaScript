//New binding
//the new keyword changes the meaning of this to be the
// object that is being created.

function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

const person1 = new Person("Harsh", 20);
//this = Person {name: 'Harsh', age: 20}

//-----------
//Implicit binding
// implicit binding - "this" refers to the object that is calling it. It is implied, without
// doing anything it's just how the language works.

const person = {
  name: "Harsh Chauhan",
  age: 20,
  hi() {
    console.log("hi " + this);
  },
};
person.hi();

//------------
//Explicit binding
// explicit binding - using the "bind" keyword to change the meaning of "this".

let name = "Harsh";

const person2 = {
  name: "person2",
  age: 21,
  hi: function () {
    console.log("hi " + this.name);
  }.bind(window),
};

person2.hi();
// hi Harsh
// this = window {...}

//Not Working Don't know Why, But its in note.
//------------

// Arrow functions as methods - "this" is lexically scoped, refers to it's current
// surroundings and no further. However, if "this" is inside of a method's function, it
// falls out of scope and belongs to the window object. To correct this, you can use a
// higher order function to return an arrow function that calls "this".
// arrow functions inside objects

const person3 = {
  name: "Person 3",
  age: 22,
  hi: function () {
    var inner = () => {
      console.log(this);
    };
    return inner();
  },
};
person3.hi();

// this = person3 { name: 'person3', age: 22, hi() {...} }
// if either function is changed around, it doesn't work
