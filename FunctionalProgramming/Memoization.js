//Memoization

// function addTo80(n) {
//   return 80 + n;
// }

// addTo80(5);
// addTo80(5);
// addTo80(5);

const cache = {};
function addTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("Long time ...");
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log(addTo80(8));
console.log(addTo80(8));

// Using Closures(Function returning another function) to Modify the above example.

function addTo80(n) {
  const cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("Long Time...");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = addTo80();

console.log(memoized(8));
console.log(memoized(8));
