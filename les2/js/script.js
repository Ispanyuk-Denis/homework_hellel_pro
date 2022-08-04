"use strict";

//1

// const userName = prompt ("Как тебя зовут?");
// const userSecondName = prompt ("Какая твоя фамилия?");
// const userAge = +prompt ("Сколько тебе лет?");
// alert (`${userName} ${userSecondName}, ${userAge}`);

//2

// let a = +prompt ("Укажите первое число");
// let b = +prompt ("Укажите второе число");
// alert (`${a} + ${b} = ${a + b}`);
// alert (`${a} - ${b} = ${a - b}`);
// alert (`${a} / ${b} = ${a / b}`);
// alert (`${a} в степени ${b} = ${a ** b}`);
// alert (`${a} * ${b} = ${a * b}`);

//3

// const userAge = prompt ("Укажите Ваш возраст");
// if (userAge < 18) {
//     alert ("Данная страница доступна только для взрослых");
// }

//4

// let a = prompt ("Введите число");
// let b = a % 2;
// switch (b) {
//     case (0):
//         alert ("Число четное");
//         break;
//     case (1):
//         alert ("Число не четное");
//         break;
//     default:
//         alert ("Вы не ввели число");
//         break;
// }

//5

// let variableValue = prompt ("Введите число от 0 до 1000");
// let randomValue = Math.round(Math.random() * 1000);
// alert (`${variableValue} > ${randomValue} ${variableValue > randomValue}`);

//6

// let data = prompt ("Введите число");

// if (data === null)
//    alert("Tип данных – null");
// else if (data === "")
//    alert("Tип данных – undefined");
// else if (!isNaN(data))
//    alert("Tип данных – number");
// else
//    alert("Tип данных – string");

//7.1


// let date = new Date();
// let month = date.getMonth() + 1;
// if (month === 12 || month === 1 || month === 2)
//     alert ("Зима");
// else if (month >= 3 && month <= 5)
//     alert ("Весна");
// else if (month >= 6 && month <= 8)
//     alert ("Лето");
// else 
//     alert ("Осень");

//7.2

// let date = new Date();
// let month = date.getMonth() + 1;
// if (month >= 3 && month <= 11) {
//     if (month >= 3 && month <= 8) {
//         if (month >= 3 && month <= 5)
//             alert ("Весна");
//         else
//             alert ("Лето");
//     }
//     else
//         alert ("Осень");
// }
// else
//     alert ("Зима");

//7.3 

// let date = new Date();
// let month = date.getMonth() + 1;
// console.log(typeof month);
// console.log (month);
// switch (month) {
//     case 3:
//     case 4:
//     case 5:
//         alert ("Весна");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert ("Лето");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert ("Осень");
//         break;
//     default:
//         alert ("Зима");
//         break;
// }

//8

// let value = prompt("Введите число");
// let valueStatus;
// let valueCoefficient = value % 10;
// if (value === "" || value === null || isNaN(value) || value < 0 || value > 100)
//     alert ("invalid");
// else {
//     if (value >=11 && value <= 19 || valueCoefficient === 0)
//         valueStatus = "балов";
//     else if (valueCoefficient === 1)
//         valueStatus = "бал";
//     else
//         valueStatus = "балла";
//     alert (`Ваша оценка: ${value} ${valueStatus}`);
// }