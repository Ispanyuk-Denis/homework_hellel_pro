"use strict";

//1

// const myBirthday = new Date(Date.parse("1991-11-27"));
// console.log (`${myBirthday.getDate()}.${myBirthday.getMonth()+1}.${myBirthday.getFullYear()}`);

//2

// function getDiffDays (startDate, endDate) {
//     startDate = Date.parse(startDate);
//     endDate = Date.parse(endDate);
//     if (isNaN(endDate) || isNaN(startDate)){
//         return 'Error: invalid date';
//     }
//     else if (endDate < startDate) {
//         return 'Error: your start date is later than end';
//     }
//     const difDays = (endDate - startDate) / 86400000;
//     return difDays;
// }
// console.log(getDiffDays('2020-01-01', '2020-01-17'));
// console.log(getDiffDays('2020-01-01', '2020-03-15'));
// console.log(getDiffDays('2021-01-02', '2020-03-15'));
// console.log(getDiffDays('gfhdgfj', '2020-03-15'));
// console.log(getDiffDays('2222222222', '2020-03-15'));

//3

// function isWeekend (userDate) {
//     userDate = new Date(userDate);
//     const dayOfWeek = userDate.getDay();
//     return dayOfWeek === 0 ? true : dayOfWeek === 6 ? true : false 
// }

// console.log(isWeekend('2022-02-12')); // true
// console.log(isWeekend('2022-02-13')); // true
// console.log(isWeekend('2022-02-09')); // false

//4

// const person = {
//     fullName: 'Sherlock Holmes',
//     address: {
//       street: "Baker Street",
//           city: "London",
//       house: "221b"
//     }
// }
// console.log (person);
// let json = JSON.stringify(person);
// console.log (json);
// const personParse = JSON.parse(json);
// console.log (personParse);

// let {fullName, address:{street, city, house}} = personParse;
// console.log (fullName);
// console.log (street);
// console.log (city);
// console.log (house);