/*
    Created on : December, 2021
    Author     : Siiri Poropudas
*/

let header = document.getElementById("header");

document.getElementById("red").addEventListener("click", colorRed);

document.getElementById("green").addEventListener("click", colorGreen);

document.getElementById("blue").addEventListener("click", colorBlue);

document.getElementById("white").addEventListener("click", colorWhite);

function colorRed() {
    header.style.color = "red";
}

function colorGreen() {
    header.style.color = "green";
}

function colorBlue() {
    header.style.color = "blue";
}

function colorWhite() {
    header.style.color = "white";
}