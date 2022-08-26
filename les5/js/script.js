"use strict";

//1

// function searchString(originalStr, str) {
//     return originalStr.includes(str);
// }
// console.log(searchString("Hello", "llo"));
// console.log(searchString("Hello", "www"));

2

// function capitalizeFirstLetter (string) {
//     return string[0].toUpperCase()+string.slice(1);
// }
// console.log(capitalizeFirstLetter("hello"));
// console.log(capitalizeFirstLetter("kkkfkkELLO"));
// console.log(capitalizeFirstLetter("hElLo")); 

//3

// function truncate(str, maxlength) {
//     if (str.length < maxlength) {
//         return str;
//     }
//     else {
//         let strArr = str.slice(0, maxlength);
//         return strArr + "...";
//     }
// }
// console.log(truncate("Hello world", 5)); // Hello...
// console.log(truncate("Hello world", 25)); // Hello world

//4

// const students = [
//     {
//         name: 'John Smith',
//         marks: [10, 8, 6, 9, 8, 7 ]
//     },
//     {
//         name: 'John Doe',
//         marks: [ 9, 8, 7, 6, 7 ]
//     },
//     {
//         name: 'Thomas Anderson',
//         marks: [6, 7, 10, 8 ]
//     },
//     {
//         name: 'Jean-Baptiste Emanuel Zorg',
//         marks: [10, 9, 8, 9 ]
//     }
// ]
// function calcAverageMark (arr) {
//     arr.forEach(function(item){
//         item.averageMark = item.marks.reduce (function (sum, item) {
//             return sum += item;
//             }, 0) / item.marks.length;
//         return item;
//     })
//     return arr;
// }
// console.log (calcAverageMark(students));

//5

// const vehicles = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//     { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//     { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//     { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//     { make: 'Toyota', model: 'Sequoia', type: 'SUV', price: 45560 },
//     { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//     { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//     { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//     { make: 'Ford', model: 'Explorer', type: 'SUV', price: 31660 }
//   ];
// const filtVehicles = vehicles.filter(item => item.type.toLowerCase() === 'suv');
// const sumFiltrPrise = filtVehicles.reduce(function (sum, item) {
//     sum += item.price;
//     return sum;
//     }, 0)

// console.log (filtVehicles);
// console.log (sumFiltrPrise);

//6

// function getKeysCount(obj) {
//     return Object.keys(obj).length;
// }
// console.log(getKeysCount({ name: 'John' })); // 1
// console.log(getKeysCount({ name: 'John', age: 22 })); // 2
// console.log(getKeysCount({ name: 'John', salary: null })); // 2

//7

// const arr = [10, 20, 3, 4, 0, 99, 97];
// function copySorted(arr) {
//     let copyArr = arr.slice();
//     return copyArr.sort ((a,b) => a - b);
// }
// const sorted = copySorted(arr);
// console.log(arr);
// console.log(sorted);