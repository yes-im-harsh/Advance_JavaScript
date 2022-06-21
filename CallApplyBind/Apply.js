/*2. Apply
Apply is almost identical to call, except that instead of a comma separated list of 
arguments, it takes an array of arguments. */

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

// instead of this
// wizard.heal.call(archer, 50, 20)
// apply looks like this
wizard.heal.apply(archer, [50, 20]);
// this has the same result

console.log(archer.health); //100
