/*JavaScript Day 12: DOM Events
1. Introduction to DOM Events
Events are signals that the browser sends to notify your code that something has happened. Think of them like
notifications on your phone - you don't constantly check your phone, you wait for the notification sound, then
you react.
Events can be triggered by:
User actions: clicking, typing, scrolling, hovering
Browser actions: page loaded, image finished loading

Real-World Analogy: The Doorbell 🔔
Imagine you're at home relaxing. You don't stand at the door all day waiting for guests. Instead:
The doorbell rings (the event happens)
You hear it (event listener detects it)
You get up and open the door (callback function runs)
This is exactly how events work in JavaScript!*/

//2. Event Listeners with addEventListener
// The modern and recommended way to handle events is using addEventListener() . It allows you to attach
// multiple event handlers to the same element without overwriting previous ones.

// Syntax

// element.addEventListener(eventType, callbackfunction);

//Example 1: Basic Button Click

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   alert("You clicked me!");
// });
//output: Button Was Clicked! (alert box:"You clicked me!" )

//Example 2: Multiple Listeners on Same Element
// let button2 = document.querySelector("#my-btn");
// button2.addEventListener("click", function () {
//   console.log("first click.......");
// });
// button2.addEventListener("click", function () {
//   console.log("second click.......");
// });
//output: first click.......
// second click.......

//Example 3: Paragraph Click Counter

// let para = document.querySelector("p");
// let count = 0;
// para.addEventListener("click", function () {
//   count++;
//   para.innerText = `You Clicked Me ${count} times`;
// });
//output: You Clicked Me 15 times

/*3. Mouse & Pointer Events

Mouse events track cursor movements and clicks. They're essential for creating interactive hover effects, drag-
and-drop, and clickable interfaces.

Common Mouse Events
click - Single left click
dblclick - Double click
mouseenter - Mouse enters element area (hover starts)
mouseleave - Mouse exits element area (hover ends)*/

//Example 1: Hover Color Change

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//   box.style.backgroundColor = "pink";
//   console.log("mouse entered!");
// });
// //output: mouse entered!
// box.addEventListener("mouseleave", function () {
//   box.style.backgroundColor = "white";
//   console.log("mouse leaved!");
// });
//output: mouse leaved!

//Example 2: Click to Toggle Visibility

// let hideBtn = document.querySelector("#hideBtn");
// let content = document.querySelector("#content");
// hideBtn.addEventListener("click", function () {
//   if (content.style.display === "none") {
//     content.style.display = "block";
//     hideBtn.innerText = "Hide";
//   } else {
//     content.style.display = "none";
//     hideBtn.innerText = "Show";
//   }
// });

//Example 3: Double Click to Edit

// let heading = document.querySelector("h1");
// heading.addEventListener("dblclick", function () {
//   heading.innerText = "You double clicked me!";
//   heading.style.color = "red";
// });

//Example 4: Interactive Card Hover

// let card = document.querySelector(".card");
// card.addEventListener("mouseenter", function () {
//   card.style.transform = "scale(1.1)";
//   card.style.boxshadow = "10px 10px 30px rgba(0,0,0,0.3 ) ";
// });
// card.addEventListener("mouseleave", function () {
//   card.style.transform = "scale(1)";
//   card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
// });

// //4. The this Keyword in Event Listeners

// When you use a regular function (not an arrow function) inside an event listener, the keyword this refers to
// the element that triggered the event. This is incredibly powerful for writing reusable code.

//Example 1: Universal Color Changer

// let heading1 = document.querySelector("h1");
// let heading2 = document.querySelector("h2");
// let button = document.querySelector("button");

// function changeColor() {
//   this.style.backgroundColor = "pink";
//   console.log(this.innerText + "was clicked!");
// }
// Same function works for all three!
// heading1.addEventListener("click", changeColor);
// heading2.addEventListener("click", changeColor);
// button.addEventListener("click", changeColor);

//Example 2: Toggle Class on Click

// let boxes = document.querySelectorAll(".boxes");

// function toggleActive() {
//   this.classList.toggle("active");
// }
// for (let box of boxes) {
//   box.addEventListener("click", toggleActive);
// }

// //Example 3: Delete Button

// let deletebuttton = document.querySelectorAll(".delete-btn");
// function removeItem() {
//   this.parentElement.remove();
//   console.log("Item-Deleted");
// }
// for (let btn of deletebuttton) {
//   btn.addEventListener("click", removeItem);
// }

//Example 4: Highlight on Hover (Multiple Elements)

// let menuItems = document.querySelectorAll(".menu-item");
// function highlight() {
//   // Remove highlight from all items first
//   for (let item of menuItems) {
//     item.style.fontWeight = "normal";
//   }
//   // Highlight only the clicked one
//   this.style.fontWeight = "bold";
// }
// for (let item of menuItems) {
//   item.addEventListener("click", highlight);
// }

// 5. Keyboard Events
// Keyboard events detect when users press or release keys. They're crucial for games, search bars, forms, and
// keyboard shortcuts.
// Event Types
// keydown - Fires when a key is pressed down
// keyup - Fires when a key is released
//Event Properties
// event.key - The character value (e.g., "a", "A", "5", "$")
// event.code - The physical key code (e.g., "KeyA", "Space", "ArrowUp")

//Example 1: Display Typed Character