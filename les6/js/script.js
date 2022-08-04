"use strict";

//1

// function sumTo(x) {
//   if (x === 1) {
//     return x;
//   }
//   return x + sumTo(x - 1);
// }
// console.log(sumTo(4)); // 10
// console.log(sumTo(3)); // 6
// console.log(sumTo(1)); // 1

//2

// function findShort(sentance) {
//         const arrSentance=sentance.split(" ");
//         let min = 0;
//         for (let i=1; i<arrSentance.length; i++) { 
//             if (arrSentance[min].length > arrSentance[i].length) {
//                 min = i;
//             }
//         }
//         return arrSentance[min];
//     }
// const sentance = "Lorem ipsum dolor sit amet";
// console.log(findShort(sentance)); // sit
// console.log(findShort("Hello world")); // Hello
// console.log(findShort("Hi")); // Hi
// console.log(findShort("She is David's sister")); // is