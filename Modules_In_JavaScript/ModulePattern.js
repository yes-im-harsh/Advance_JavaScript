?//Old Way of using the modular concept in JavaScript

var globalScopeVar = "I can be accessed anywhere";

//IIFE
var moduleName = (function (globalScopeVar) {
  //Add Private variable here (way to make private variable)
  var privateVar = "I can't be accessed outside";

  //create the function
  function say(msg1, msg2) {
    var say1 = Math.floor(Math.random() * msg1.length);
    var say2 = Math.floor(Math.random() * msg2.length);
    return say1 > say2 ? say1 : say2;
  }
  globalScopeVar = "I don't change the outside";

  // return only what you want the outside to access
  return { say: say };
})(globalScopeVar);

//We can only access the say, because its the only thing that is returned by the above IIFE.
moduleName.say("I am the king", "The king of kings");
