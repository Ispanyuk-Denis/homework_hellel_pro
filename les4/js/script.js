"use strict";

//1

// const array = [2, 18, 33, 40, 1, 0, -3, 10];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);
// console.log(sum / array.length);

//2

// const array = [2, `lol`, 3, 10, true, null, 11, `100`];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//         sum += array[i];
//     }
// }
// console.log(sum);

//3

// const array = [];
// for (let i = 0; i < 10 ; i++) {
//     array[i] = (+(Math.random() * 10).toFixed(2));
// }
// console.log (array);
// for (let j = 0; j < array.length; j++) {
//     console.log (array[j] ** 5);
// }

//4

// const array = [];
// let number = 0;
// for (let i = 0; i < 10; i++){
//     array[i] = [];
//     for (let j = 0; j < 10; j++){
//         array[i][j] = (`${i + 1} * ${j + 1} = ${(i + 1) * (j + 1)}`);
//     }
// }
// console.log (array);

//5

// let user = {};
// user.name = prompt("Как Вас зовут?");
// user.surName = prompt("Какая Ваша фамилия?");
// user.jobPosition = prompt("Какая Ваша должность?");
// alert (`Привет, ${user.name} ${user.surName}. Как долго ты работаешь ${user.jobPosition}?`);

//6

// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }
// console.log (isEmpty({}));
// console.log(isEmpty({ name: 'John' }));
// console.log(isEmpty({ age: 20 }));