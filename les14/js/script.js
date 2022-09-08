"use strict";

//1

const listAlbums = document.getElementById("albums")
fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((result) => {
        result.forEach(item => {
            const elementList = document.createElement("li");
            elementList.classList.add("album_title");
            elementList.innerHTML = `${item.title}`;
            listAlbums.append(elementList);      
            });
    })
    .catch((error) => console.log(error));