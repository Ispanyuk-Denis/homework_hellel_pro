"use strict";

//1

// const randomNumber = Math.random();
// console.log (+randomNumber.toFixed(2));
// console.log (+randomNumber.toFixed(3));
// console.log (+randomNumber.toFixed(4));

//2

// for (let i = 0; i < 10; i++) {
//     const n = i % 2;
//     if (n === 0) {
//         console.log(i ** 2);
//     }
// }

//3

// while (true) {
//     const userNumber = prompt("Ведите число больше 100");
//     if (userNumber > 100 || userNumber === null ) {
//         break;
//     }
// }

//4

let sum = 0;
let counter = 0;
while (true) {
    const userNumber = prompt("Введите числo");
    if (userNumber === null) {
        break;
    }
    sum = sum + +userNumber;
    counter = counter + 1;
}
let arithmeticMean = sum / counter;
console.log(counter, sum, arithmeticMean);

//5

// const userNumber = +prompt ("Введите число от 0 до 100");
// let i;
// if (userNumber >= 0 && userNumber <= 100) {
//     for (i = 0; i < 100; i++){
//         if (i === userNumber) {
//             break;
//         }
//         console.log(i);
//     }
// }

//6

// function random (min, max) {
//     const randomNumber = min + Math.random() * (max - min);
//     return (randomNumber);
//   }
// console.log(random (1, 5));
// console.log(random(10, 50));

//7

// function pow(x, n) {
//     if(!n){
//         return 1
//     }
//     let i;
//     let result = x;
//     for (i = 1; i < n; i++){
//         result *= x;
//     }
//     return (result);
// }
// console.log(pow(3, 2));
