"use strict";

//1

fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((result) => {
        const getterArr = result;
        const listAlbums = document.getElementById("albums");
        getterArr.forEach(item => {
            const elementList = document.createElement("li");
            elementList.classList.add("album_title");
            elementList.innerHTML = `${item.title}`;
            listAlbums.append(elementList);      
            });
        }
    )
    .catch((error) => console.log(error));