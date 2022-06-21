/*1. Call
Call is a method of an object that can substitute a different object than the one it is 
written on. */

const wizard = {
  name: "Merlin",
  health: 100,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

console.log(archer.health); //30

wizard.heal.call(archer, 50, 20);

console.log(archer.health); //100
