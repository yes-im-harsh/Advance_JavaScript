// const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log("I am at index " + i);
//   }, 3000);
// }
// //
// setTimeout(() => {
//   for (var i = 0; i < array.length; i++) {
//     console.log("I am at index " + i);
//   }
// }, 3000);

// //
// const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//   (function (clouserI) {
//     setTimeout(function () {
//       console.log("I am at index " + clouserI);
//     }, 3000);
//   })(i);
// }

// const array = [1, 2, 3, 4];
// for (let i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log("I am at index " + i);
//   }, 3000);
// }

//
new Date("1900-10-10").lastYear();
// "1899"
//Solution
Date.prototype.lastYear = function() ={
  console.log(this);
  return this.getFullYear() - 1;
};

// 2nd Solution
Array.prototype.map = function () {
 let arr =[];
 for(let i=0; i<this.length; i++){
  arr.push((this[i] + "🗺️"))
 }

 return arr;
}
console.log([1,2,3].map())
// ['1🗺️', '2🗺️', '3🗺️']
