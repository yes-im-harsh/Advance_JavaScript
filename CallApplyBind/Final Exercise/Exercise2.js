//Exercise 2: How would you fix this?

const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};

const giveMeTheCharacterNOW = character.getCharacter;
//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); /*this should return 
'Simon' but doesn't */

//Answer

const giveMeTheCharacterNOW = character.getCharacter.bind(character);
console.log("?", giveMeTheCharacterNOW());
