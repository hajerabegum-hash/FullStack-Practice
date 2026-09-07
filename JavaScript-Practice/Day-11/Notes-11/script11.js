// JavaScript Day 11: DOM Manipulation

// Introduction

// Welcome to DOM Manipulation! Today we learned how to dynamically change HTML elements, their styles,

// and structure using JavaScript. We used the Solar System webpage ( new_index.html ) for all our examples.

// What is DOM Manipulation?

// DOM (Document Object Model) manipulation means changing the webpage after it has loaded. You can modify

// text, images, styles, add new elements, or remove existing ones - all with JavaScript!

// 1. Manipulating Attributes
// What are Attributes?

// Attributes are extra information inside HTML tags like id , src , class , href , etc. JavaScript lets us read and
// change these values.

// Methods:
// getAttribute(attr) - Read the current value
// setAttribute(attr, value) - Change the value

// Examples:
// Example 1: Get the ID of an element

// let solarImg = document.querySelector("img");
// let idName = solarImg.getAttribute("id");
// console.log(idName);
// //// Output: "mainImg"

// Example 2: Change the ID

// let solarImg = document.querySelector("img");

// solarImg.setAttribute("id", "galaxy-image");
// The image now has id="galaxyImg" instead of id="mainImg"

//Example 3: Change the image source
// let solarImg = document.querySelector("img");

// solarImg.setAttribute("src", "assets/earth.jpg");
//output: The image will now display earth.jpg

// Example 4: Get and change a link's href

let link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href",)