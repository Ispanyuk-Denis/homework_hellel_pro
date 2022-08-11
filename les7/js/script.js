"use strict";

//1

// function sumTwoSmallestNumbers(...array) {
//     if (array.length <= 1 ) {
//         return console.error(`Задайте больше аргументов`);
//     }
//     else {
//         const sortedArray = array.sort((a, b) => a - b);
//         return sortedArray[0] + sortedArray[1];
//     }

// }
// console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
// console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
// console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")
// console.log(sumTwoSmallestNumbers());

//2

// function createCalculator(a) {
//     return {
//         sum: (b) => a += b,
//         mult: (b) => a *= b,
//         sub: (b) => a -= b,
//         div: (b) => a /= b
//     }
// }
// const calc = createCalculator(10);

// console.log(calc.sum(5)); /// 15
// console.log(calc.mult(10)); // 150
// console.log(calc.sub(40)); // 110
// console.log(calc.div(10)); // 11