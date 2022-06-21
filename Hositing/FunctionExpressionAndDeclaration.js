//A function can be called from anywhere in the code base because it is fully hoisted

//Function expression gets hoisted as undefined
var dance = function () {
  console.log("dance for me");
};

//Function declaration gets fully hoisted
function sing() {
  console.log("ohh.. lalala");
}
