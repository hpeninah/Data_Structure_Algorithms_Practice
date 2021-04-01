// fibonacci
// 1, 1, 2, 3, 5, 8, ....
​
// memoization - cache computed values so we don't have to do the same thing
// dynamic programming - takes a recursive function that calls itself multiple
// times with the same inputs and memorize those inputs
​
// function fib(n, prevValues = []) {
//   if (prevValues[n] != null) {
//     return prevValues[n];
//   }
​
//   let result;
//   //base case
//   if (n <= 2) {
//     result = 1;
//   } else {
//     result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
//   }
​
//   prevValues[n] = result; // store the calculated fib sequence
//   return result;
// }
​
// console.log(fib(200));

// Problem: convert a number to its binary equivalent
/**
 * Info: how does binary work? Think about decimal first. Each column
 * represents a power of ten (ones, tens, hundreds). For example, take the
 * number 274.
 *
 * 100s 10s 1s
 *    2   7  4 === (2 * 100) + (7 * 10) + (4 * 1) === 274
 *
 *
 * Binary is the same, but each column represents a power of two.
 *
 * 2^0 = 1
 * 2^1 = 2
 * 2^2 = 4
 * 2^3 = 8
 *
 * 8421
 * ----
 *    0  ===                                (0 * 1) === 0
 *    1  ===                                (1 * 1) === 1
 *   10  ===                      (1 * 2) + (0 * 1) === 2
 *   11  ===                      (1 * 2) + (1 * 1) === 3
 *  100  ===            (1 * 4) + (0 * 2) + (0 * 1) === 4
 *  101  ===            (1 * 4) + (0 * 2) + (1 * 1) === 5
 *  110  ===            (1 * 4) + (1 * 2) + (0 * 1) === 6
 *  111  ===            (1 * 4) + (1 * 2) + (1 * 1) === 7
 * 1000  ===  (1 * 8) + (0 * 4) + (0 * 2) + (0 * 1) === 8
 */

function toBinary2(x) {
    //base case
    if(x === 0 || x === 1) {
        return x.toString(); //return the 0 or 1 in string for
    }

    const lsb = (x % 2).toString(); // get least significant bit
    const restAsDecimal = Mat.floor(x/2); //already stored lsb so we find decimal
    const restAsBinary = toBinary2(restAsDecimal); //recursively pass restAsDecimal into toBinary2

    return restAsBinary + lsb;
}

 function toBinary(x) {
     if(x >= 1) {
         if(x % 2) {
             return toBinary((x - 1) / 2) + 1;
         } else {
             return toBinary(x/2) + 0;
         }
     } else {
         return '';
     }
}

// test case:
console.log(toBinary(10)); // 1010
console.log(toBinary(8)); // 1000
console.log(toBinary(5)); // 101