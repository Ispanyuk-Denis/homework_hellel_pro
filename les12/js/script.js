"use strict";

//1

const API_URL = "https://jsonplaceholder.typicode.com/users";

fetch(API_URL)
.then((response) => response.json())
.then((result) => {
const searchedUser = result.find(item => item.company.name === 'Johns Group');
console.log(searchedUser)})
.catch((error) => console.log(error));
