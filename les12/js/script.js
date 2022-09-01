"use strict";

//1

const API_URL = "https://jsonplaceholder.typicode.com/users";

fetch(API_URL)
.then((response) => response.json())
.then((result) => {
const filterUser = result.filter(item => item.company.name === 'Johns Group');
console.log(filterUser)})
.catch((error) => console.log(error));
