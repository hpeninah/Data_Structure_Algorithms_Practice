// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

function singleNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(numbers[i] !== numbers[j]) {
                return numbers[j];
            }
        }
    }
}

console.log(singleNumber([1, 1, 3, 2, 2])); // 3
console.log(singleNumber([1, 1, 3, 2, 2])); // 3
console.log(singleNumber([2, 3, 5, 3, 2])); // 5
console.log(singleNumber([5, 5, 2, 4, 2])); // 4


// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.
​
// Brute Force: iterate through the entire array. return value if you don't find a pair
// O(n^2)
// function singleNumber(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     const numberA = numbers[i];
//     let foundPair = false;
//     for (let j = 0; j < numbers.length; j++) {
//       if (i === j) {
//         continue; // ends the current loop if the same index
//       }
​
//       const numberB = numbers[j];
//       if (numberA === numberB) {
//         foundPair = true;
//         break;
//       }
//     }
//     if (!foundPair) {
//       return numberA;
//     }
//   }
// }
​
// Better: use Map to store the numbers we have seen
// O(n) - both time and space complexity
​
// function singleNumber(numbers) {
//   const counts = new Map();
​
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     const count = counts.get(number);
//     counts.set(number, count !== undefined ? count + 1 : 1); // ternary: (condition ? true : false)
//   }
​
//   for (let [number, count] of counts.entries()) {
//     if (count === 1) {
//       return number;
//     }
//   }
// }
​
// Can we do this without using O(n) space complexity
// O(n) - time complexity
// xor - ^
// a ^ b ^ b === a
​
function singleNumber(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result = result ^ numbers[i];
  }
​
  return result;
}
​
console.log(singleNumber([1, 1, 3, 2, 2])); // 3
console.log(singleNumber([2, 3, 5, 3, 2])); // 5
console.log(singleNumber([5, 5, 2, 4, 2])); // 4
