//Exercise: Find the largest number in an array

const array = [1, 2, 3];

function largestNumber(arr) {
  return Math.max.apply(null, array);
}

largestNumber(array);
