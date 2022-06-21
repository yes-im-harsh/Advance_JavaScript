/* 3. Bind
Unlike call and apply, bind does not run the method it is used on, but rather returns a 
new function* that can then be called later */

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

const healArcher = wizard.heal.bind(archer, 50, 20);
healArcher();

console.log(archer.health); //100
