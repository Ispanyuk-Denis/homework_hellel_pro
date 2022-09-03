"use strict";

//1

// const localDataUser = JSON.parse(localStorage.getItem('obj'));
// if (localDataUser === null) {
//     const API_URL = "https://jsonplaceholder.typicode.com/users/1";
//     fetch(API_URL)
//     .then((response) => response.json())
//     .then((result) => {
//         const dataUser = result;
//         localStorage.setItem("obj", JSON.stringify(dataUser));
//         }
//     )
//     .catch((error) => console.log(error));
// }
// console.log(localDataUser);

//2

// function isValidDateFormat(str) {
//     let regexp = /^\d{4}\/\d{2}\/\d{2} \d{2}\:\d{2}$/
//     return regexp.test(str)
// }
// console.log(isValidDateFormat("2012/09/18 12:10")); // true
// console.log(isValidDateFormat("12.02.2022 12:10")); // false

//3

function isAfter (startDate, finishDate) {
    return (startDate > finishDate);
}
console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
console.log(isAfter(1648636135000, 1648549735000)); // true
console.log(isAfter(1648549735000, 1648636135000)); // false