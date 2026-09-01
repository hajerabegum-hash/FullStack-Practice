//JavaScript Day 7: Functions & Scopes - Study Notes

/*
1. Introduction to Functions
Functions are reusable blocks of code that perform specific tasks. Think of them as recipes in a cookbook - you
write the recipe once, and you can follow it whenever you need to make that dish.
Why use functions?
Avoid repeating code (DRY principle - Don't Repeat Yourself)
Make code organized and easier to maintain
Break complex problems into smaller, manageable pieces

Function Definition and Calling
Function Definition tells JavaScript what the function should do:*/

// function sayHello() {
//   console.log("Hello, World!");
// }

// // /Function Calling executes the function:
// sayHello();

// // Examples
// // Example 1: Simple greeting function

// function greet() {
//   console.log("Welcome to JavaScript!");
// }
// greet();
// // Output: Welcome to JavaScript!

// // Example 2: Display a message
// function showMessage() {
//   console.log("Learning functions is fun!");
// }
// showMessage();
// Output: Learning functions is fun!

// Example 3: Multiple actions in one function

// function introduction() {
//   console.log("My name is JavaScript");
//   console.log("I was created in 1995");
//   console.log("I run in browsers");
// }
// introduction();
// Output:
// My name is JavaScript
// I was created in 1995
// I run in browsers

/*2. Functions with Arguments

Arguments (also called parameters) allow you to pass information into a function, making it more flexible and
reusable. Think of a coffee machine - the beans and water you put in are the arguments, and the machine uses
them to make your specific drink.*/

//Syntax:

// function functionName(parameter1, parameter2) {
// code that uses the parameters
// }

//  Examples

// Example 1: Personalized greeting

// function greetuser(name) {
//   console.log("hello," + name + "!");
// }

// greetuser("Alice");
// // Output: Hello, Alice!
// greetuser("Bob");
// // Output: Hello, Bob!
// greetuser("Charlie");
// // Output: Hello, Charlie!

// Example 2: Calculate sum of two numbers

// function addNumber(a, b) {
//   let sum = a + b;
//   console.log("sum is:" + sum);
// }
// addNumber(3, 5);
// // Output: Sum is: 8
// addNumber(10, 20);
// // Output: Sum is: 30

// Example 3: Calculate average of three numbers
// function calcAverage(a, b, c) {
//   let avg = (a + b + c) / 3;
//   console.log("Average is:" + avg);
// // }
// calcAverage(10, 20, 30);
// // Output:Average is: 20

// calcAverage(85, 90, 95);
// Output:Average is: 90

// Example 4: Create personalized messages

// function createMessage(name, age) {
//   console.log(name + "is" + age + "years old");
// }
// createMessage("Sarah", 25);

// // Output: Sarah is 25 years old
// createMessage("Tom", 30);
// // Output: Tom is 30 years old

//Example 5: Calculate rectangle area

// function calculateArea(length, width) {
//   let area = length * width;
//   console.log("Area is:" + area);
// }
// calculateArea(5, 10);
// // Output: Area is: 50
// calculateArea(7, 3);
// // Output: Area is: 21

// 3. The return Keyword

// The return keyword sends a value back from a function to where it was called. Think of an ATM - you insert
// your card and PIN (arguments), and it returns cash to you. Once return executes, the function stops
// immediately.

// Key Points:
// return sends a value back from the function
// Code after return never executes
// Allows you to store or use the result in other operations

// Examples
// Example 1: Return sum of two numbers

// function sum(a, b) {
//   return a + b;
// }
// let result = sum(5, 10);
// console.log(result);

// Output: 15
// let total = sum(100, 200);
// console.log(total);
// // Output: 300

// Example 2: Return product of two numbers

// function multiply(x, y) {
//   return x * y;
// }
// let answer = multiply(4, 5);
// console.log(answer);
// // Output: 20

// console.log(multiply(3, 7));
// Output: 21

// // Example 3: Code after return never runs
// function test() {
//   return 10;
//   console.log("this will never print");
//   return 20; // This is also ignored
// }
// let value = test();
// console.log(value);
// Output: 10

//Example 4: Using return value in calculations

// function getPrice() {
//   return 50;
// }
// let price = getPrice();

// let tax = price * 0.1;
// let total = price + tax;
// console.log(total);
// Output: 55

//Example 5: Return string

// function getGreeting(name) {
//   return "Hello, " + name;
// }
// let message = getGreeting("Alice");
// console.log(message);
// // Output: Hello, Alice
// console.log(getGreeting("Bob"));
// // Output: Hello, Bob

//4 .UNDERSTANDING SCOPES

//Scopes determines where variables can be accessed in your code

//function scopes

//variable declared inside a function cannot be accessed from outside that function

//example: 1 Basic functions scope

//6. function expression
//A function can be stored inside a variable. This is called a function expression

//examples
// //example:1 Basic function expression
// const multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(4, 6));
// //output: 24
// console.log(multiply(10, 6));
//output: 60

//2. example:function expressiom with greeting

// const sayHi = function (name) {
//   console.log("Hi," + name + "!");
// };
// sayHi("Tom");
// //output: Hi, Tom!
// sayHi("Jerry");
//output: Hi, Jerry!

//example:3 Arrow function (modern syntax)
// const square = (num) => {
//   return num * num;
// };
// console.log(square(5));
// //output:25
// console.log(square(10));
// //output: 100

//example:4 storing different functions:

// const add = function (a, b) {
//   return a + b;
// };
// const subtract = function (a, b) {
//   return a - b;
// };
// console.log(add(10, 5));
// //output:15
// console.log(subtract(10, 5));
// //output:5

//7.  Higher-Order Functions
//  Higher-Order Functions are funstions thar either accept other functions as argumentdor return functiond. Think of a manager - the manager does not do the basic work themselves. they take a worker (another function ) and tell them tp do the work.

//examples

// //example-1: function accept another function
// function repatTask(func, n) {
//   for (let i = 0; i < n; i++) {
//     func();
//   }
// }
// const alertUser = () => {
//   console.log("Alert!");
// };
// repatTask(alertUser, 3);
//output: Alert!
//output: Alert!
//output: Alert!

// example:2 Apply discount price

// function applyDiscount(price, discountFunc) {
//   return discountFunc(price);
// }
// const tenPercent = (price) => price * 0.9;
// console.log(applyDiscount(100, tenPercent));
// //output: 90
// const twentyPercent = (price) => price * 0.8;
// console.log(applyDiscount(100, twentyPercentPercent));
// //output: 80

//Example 3: Execute different operations

// function calculate(a, b, operation) {
//   return operation(a, b);
// }
// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;
// console.log(calculate(5, 3, add));
// // Output: 8
// console.log(calculate(5, 3, multiply));
// // Output: 15

// Example 4: Process array elements

// function processArray(arr, processor) {
// for (let i = 0; i < arr.length; i++) {
// processor(arr[i]);
// }
// }
// const printDouble = (num) => {
// console.log(num * 2);
// };
// processArray([1, 2, 3], printDouble);
// // Output:
// 2
// 4
// 6

// 8. Methods

// Methods are functions that are defined as properties inside an object. Think of a smartphone - the phone is the
// object, and its apps (Camera, Music, Settings) are the methods - actions the phone can perform.

//Traditional Syntax

// const car = {
//   brand: "tesla",
//   start: function () {
//     console.log("Engine on");
//   },
//   stop: function () {
//     console.log("Engine off");
//   },
// };
// car.start();
// // Output: Engine on
// car.stop();
// Output: Engine off

// Modern Shorthand Syntax (Preferred)

// const mathTools = {
//   add(a, b) {
//     return a + b;
//   },
//   subtract(a, b) {
//     return a - b;
//   },
// };
// console.log(mathTools.add(5, 3));
// // Output: 8
// console.log(mathTools.subtract(10, 4));
// // Output: 6
//Examples
// Example 1: Calculator object
// const calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
// };
// console.log(calculator.add(10, 5));
// // Output: 15
// console.log(calculator.multiply(4, 7));
// // Output: 28

//Example 2: Person object with methods

// const person = {
//   name: "Alice",
//   greet() {
//     console.log("Hello, I am " + this.name);
//   },
//   sayAge(age) {
//     console.log("I am " + age + " years old");
//   },
// };
// person.greet();
// // Output: Hello, I am Alice
// person.sayAge(25);
// // Output: I am 25 years old

// Example 3: Bank account object

// const account = {
//   balance: 1000,
//   deposit(amount) {
//     this.balance = this.balance + amount;
//     console.log("New balance: " + this.balance);
//   },
//   withdraw(amount) {
//     this.balance = this.balance - amount;
//     console.log("New balance: " + this.balance);
//   },
// };
// account.deposit(500);
//  // Output: New balance: 1500
// account.withdraw(200);
// Output: New balance: 1300

//Example 4: String formatter object

// const formatter = {
//   toUpper(str) {
//     return str.toUpperCase();
//   },
//   toLower(str) {
//     return str.toLowerCase();
//   },
//   trim(str) {
//     return str.trim();
//   },
// };
// console.log(formatter.toUpper("hello"));
// // Output: HELLO
// console.log(formatter.toLower("WORLD"));
//  // Output: world
// console.log(formatter.trim(" spaces "));
// // Output: spaces

//Example 5: Counter object

// const counter = {
//   count: 0,
//   increment() {
//     this.count++;
//     console.log("Count: " + this.count);
//   },
//   reset() {
//     this.count = 0;
//     console.log("Counter reset");
//   },
// };
// counter.increment();
// // Output: Count: 1
// counter.increment();
// // Output: Count: 2
// counter.reset();
// Output: Counter reset

///*************____________the end_____________********** */
