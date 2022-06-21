//This:- this is the object that the function is a property of

this;
window;

this === window;

(function a() {
  console.log(this);
})();
