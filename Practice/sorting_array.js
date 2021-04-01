// Problem: Sort an array of values which only contains zeroes or ones
​
// Simplest: Just using merge/quicksort
// O(nlog(n))
// function sortBinary(arr) {
//   if (!arr.length) {
//     return arr;
//   }
//   arr.sort();
//   return arr;
// }
​
// Better: make an array with zeroes and one with ones, and merge them
// O(n) - single loop and single concatentation
// function sortBinary(arr) {
//   const zeroes = [];
//   const ones = [];
​
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zeroes.push(0);
//     } else {
//       ones.push(1);
//     }
//   }
​
//   return [...zeroes, ...ones];
// }
​
// Can we do this without using O(n) extra memory?
// O(n)
// function sortBinary(arr) {
//   let zeroes = 0;
​
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zeroes++; // count if we have a zero
//     }
//   }
​
//   for (let i = 0; i < zeroes; i++) {
//     arr[i] = 0; // replace first part with 0's
//   }
​
//   for (let i = zeroes; i < arr.length; i++) {
//     arr[i] = 1; // replace remaining positions with 1's
//   }
​
//   return arr;
// }
​
// Can we do it in a single loop?
// similar to quicksort
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
​
function sortBinary(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) {
      swap(arr, i, j);
      i++;
    }
  }
  return arr;
}
​
function sortBinary (array) {
    return array.sort((n1,n2) => n1-n2)
}
    


console.log(sortBinary([0, 1, 1, 0, 1, 0, 1, 1])); // [0, 0, 0, 1, 1, 1, 1, 1]
console.log(sortBinary([])); // []
console.log(sortBinary([1, 1, 1, 0, 0, 0])); // [0, 0, 0, 1, 1, 1]
console.log(sortBinary([1, 1, 1])); // [1, 1, 1]
