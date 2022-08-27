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
//         arrSentance.sort ((a,b) => a.length - b.length);
//         console.log (arrSentance);
//         return arrSentance[0]
//     }
// const sentance = "Lorem ipsum dolor sit amet";
// console.log(findShort(sentance)); // sit
// console.log(findShort("Hello world")); // Hello
// console.log(findShort("Hi")); // Hi
// console.log(findShort("She is David's sister")); // is