// Introduction to Loops
// Loops allow you to execute a piece of code multiple times without rewriting it. This is called iteration. Instead
// of writing the same code 10, 100, or 1000 times, you can use a loop to repeat it automatically.

// Imagine you want to print "Hello" 100 times. Without loops:

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// ...AbortController.apply.96 times more!

// with loop

// for (let i=0; i<100; i++){
//     console.log("Hello!")
// }

// The for Loop
// The for loop is the most commonly used loop when you know exactly how many times you want to repeat
// something.

//Syntax

// for (initialization; condition; updation) {
// Code to execute repeatedly
// }

// Example 1: Print Numbers 1 to 5

// for (let i=1; i<=5;i++) {
//     console.log(i);

// }
//output: 1,2,3,4,5

//Example 2: Print Odd Numbers from 1 to 15

// for (let i=1; i<=15; i+=2){
// console.log(i);}

//output: 1,3,5,7,9,11,13,15

// Example 3: Print Even Numbers from 2 to 10

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }
//Output: 2, 4, 6, 8, 10

// Example 4: Multiplication Table of 5
//  for (let i=1; i<=10; i++){
// console.log(`5*${i}=${5*i}`)
//  }
//output:
// 5*1=5
//  5*2=10
//  5*3=15
//  5*4=20
//  5*5=25
//  5*6=30
//  5*7=35
//  5*8=40
//  5*9=45
//  5*10=50

//Example 5: Countdown from 10 to 1
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Blast Off!");

//output: 10,9,8,7,6,5,4,3,2,1,BlastOff!

// Infinite Loops (Warning!)
// Cause 1: Missing Updation

//// ❌ INFINITE LOOP - Don't run this!
// for (let i = 1; i <= 5; ) {
//   console.log(i);
// i never changes, so i <= 5 is always true
// }
//Cause 2: Wrong Updation Direction
// ❌ INFINITE LOOP
// for (let i = 1; i >= 0; i++) {
// console.log(i);}
// i keeps increasing, so i >= 0 is always true

//Cause 3: Omitting the Condition

// ❌ INFINITE LOOP
// for (let i = 1; ; i++) {
// console.log(i);}
// No condition means "always true"

// Example 1: Fixed Version - Proper Updation
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
//output: 1,2,3,4,5

//Example 2: Fixed Version - Correct Direction

// ✓ CORRECT
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// Counts down from 10 to 0 and stops
//output: 10,9,8,7,6,5,4,3,2,1,0

// Example 4: Infinite Loop with while
// ❌ INFINITE LOOP
// let count = 0;
// while (count < 5) {
// console.log(count);
// // Forgot to increment count!
// }

//Example 5: Fixed While Loop

// let count = 0;
// while (count < 5) {
//   console.log(count);
//   count++;
// }
//output: 0,1,2,3,4

//Nested for Loops

// Syntax
// for (let i = 1; i <= outerLimit; i++) {
//     for( let j=1;j<=innerLimit:j++){

//  / Inner loop code
//    }
// }

//Example 1: Basic Nested Loop

// for (let i = 1; i <= 3; i++) {
//   console.log(`Outer loop:${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`Inner loop:${j}`);
//   }
// }
// Output:
// Outer loop: 1
// Inner loop: 1
// Inner loop: 2
// Inner loop: 3
// Outer loop: 2
// Inner loop: 1
// Inner loop: 2
// Inner loop: 3
// Outer loop: 3
// Inner loop: 1
// Inner loop: 2
// Inner loop: 3

//Example 2: Multiplication Table (1 to 5)

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     row += i * j + "\t";
//   }
//   console.log(row);
// }
//output: (formatted as a table):
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25

//Example 3: Pattern Printing - Right Triangle

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }
// output:
// *
// * *
// * * *
// * * * *
// * * * * *

//while Loop
// The while loop is used when you want to execute code as long as a condition is true, especially when you
// don't know in advance how many iterations you'll need.

//syntax

// Initialization (outside the loop)

// let i = 1;

// while (condition) {
//   //code to excute
//   //updation (inside the loop)
//   i++;
// }

//Example 1: Count from 1 to 5

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
//output: 1,2,3,4,5

//Example 2: Sum Numbers Until Target Reached

// let sum = 0;

// let num = 1;

// while (sum < 50) {
//   sum += num;
//   console.log(`added ${num}, sum is now ${sum}`);
//   num++;
// }
// console.log(`final sum:${sum}`);
//output:Added 1, sum is now 1
// Added 2, sum is now 3
// Added 3, sum is now 6
// ...
// Added 10, sum is now 55
// Final sum: 55

//Example 3: Password Validation (Simplified)

// let password = "";
// let attempts = 0;
// while (password !== "secret123" && attempts < 3) {
//   password = prompt("Enter Your Password:");
//   attempts++;
//   if (password === "secret123") {
//     console.log("Access Granted!");
//   } else if (attempts < 3) {
//     console.log(`Wrong Password.${3 - attempts} attempts remaining.`);
//   } else {
//     console.log("Access denied.Too many attempts");
//   }
// }

//Example 4: Halving Until Below Threshold
// let number = 1000;
// while (number > 1) {
//   number = number / 2;
//   console.log(number);
// }
// //output: 500, 250, 125, 62.5, 31.25, 15.625, 7.8125, 3.90625, 1.953125, 0.9765625

//example5: Finding First Power of 2 Greater Than Value

// let target = 1000;
// let power = 1;
// let exponent = 0;
// while (power <= target) {
//   exponent++;
//   power = 2 ** exponent;
// }
// console.log(
//   `2^${exponent}=${power} is the first power of 2 greater than ${target}`,
// );
//Output: 2^10 = 1024 is the first power of 2 greater than 1000

//do...while Loop
// The do...while loop is similar to the while loop, but with one crucial difference: it executes the code block at
// least once before checking the condition.

//syntax

//do{
//code to excute
//(run at least once)
//} while (condition);

//Example 1: Menu System

// let choice;
// do {
//   //   console.log("Menu:");
//   //   console.log("1.play");
//   //   console.log("2.settings");
//   //   console.log("3.Exit1");
//   choice = prompt("Menu \n 1.play\n 2.settings\n 3.Exit1\n Enter your choice:");
//   if (choice === "1") {
//     console.log("starting game...");
//   } else if (choice === "2") {
//     console.log("openings settings...");
//   }
// } while (choice !== "3");
// console.log("good bye!");
//output: starting game...openings settings...good bye!

// Example 2: Countdown with At Least One Execution

// letcount = 0; // Even though count is 0...
// do {
// console.log(`Count: ${count}`);
// count++;
// } while (count < 0); // ...condition is false from the start
// Output: Count: 0
// (Executes once despite condition being false)

//loop Control: break and continue

// break Statement

// Purpose: Immediately exit the loop completely, regardless of the condition.

// Example 1: Find First Number Divisible by 7

// for (let i = 1; i <= 10; i++) {
//   if (i % 7 === 0) {
//     console.log(`first number divisible by 7:${i}`);
//   }
// }
// //output: first number divisible by 7:7

//Example 2: Search in Array

// let fruits = ["apple", "banana", "orange", "grape", "mango"];
// let searchFor = "orange";
// let found = false;
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === searchFor) {
//     console.log(`found ${searchFor} at index${i}`);
//     found = true;
//     break; //no need to continue searching
//   }
// }
// if (!found) {
//   console.log(`${searchFor} not found`);
// }
//Output: Found orange at index 2

// continue Statement

// Purpose: Skip the current iteration and jump to the next one (doesn't exit the loop).

// Example 4: Print Numbers, Skip 3

// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     continue; // Skip when i is 3
//   }
//   console.log(i);
// }
// // Output: 0, 1, 2, 4, 5 (3 is skipped))

//example5: Print Only Even Numbers Using continue

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue; // Skip odd numbers
//   }
//   console.log(i);
// }
// // Output: 2, 4, 6, 8, 10

// Iterating Over Arrays

// Loops are essential for accessing and processing every element in an array.

// Using for Loop with .length

// The most common pattern for iterating through arrays.

// Example 1: Print All Array Elements

// let cities = ["london", "paris", "tokyo", "new work", "sydney"];
// for (let i = 0; i < cities.length; i++) {
//   //   console.log(`${i};${cities[i]}`);
// }
//Output:
// 0: London
// 1: Paris
// 2: Tokyo
// 3: New York
// 4: Sydney

//Example 2: Calculate Sum of Numbers

// let scores = [85, 92, 78, 95, 88];
// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
//   sum += scores[i];
// }
// let average = sum / scores.length;
// console.log(`Total: ${sum}, Average: ${average}`);
// Output: Total: 438, Average: 87.6

//Example 3: Find Maximum Value
// let numbers = [23, 67, 12, 89, 45, 91, 34];
// let max = numbers[0]; // Start with first element
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(`Maximum value: ${max}`);
// Output: Maximum value: 91

//Example 4: Reverse Print an Array

// let colors = ["red", "green", "blue", "yellow"];
// console.log("Original order:");
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
// console.log("\nReverse order:");
// for (let i = colors.length - 1; i >= 0; i--) {
//   console.log(colors[i]);
// }
// Output:
// Original order: red, green, blue, yellow
// Reverse order: yellow, blue, green, red

// example 5: Filter Array (Create New Array with Conditions)
// let ages = [12, 25, 17, 30, 15, 40, 19];
// let adults = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     adults.push(ages[i]);
//   }
// }
// console.log("Adults:", adults);
// Output: Adults: [25, 30, 40, 19]

// Nested Arrays (2D Arrays)

// Arrays can contain other arrays, creating a matrix or table structure.

// Example 6: Iterate Through 2D Array

// let teams = [
//   ["Alice", "Bob"],
//   ["Charlie", "David"],
//   ["Eve", "Frank"],
// ];
// for (let i = 0; i < teams.length; i++) {
//   console.log(`Team ${i + 1}:`);
//   for (let j = 0; j < teams[i].length; j++) {
//     console.log(`-${teams[i][j]}`);
//   }
// }
//// Output:
// Team 1:
// - Alice
// - Bob
// Team 2:
// - Charlie
// - David
// Team 3:
// - Eve
// - Frank:

//Example 7: 2D Array - Student Grades

// let grades = [
//   [85, 90, 78],
//   [92, 88, 95],
//   [76, 82, 82],
// ];
// for (let student = 0; student < grades.length; student++) {
//   let sum = 0;
//   for (let test = 0; test < grades[student].length; test++) {
//     sum += grades[student][test];
//   }
//   let average = sum / grades[student].length;
//   console.log(`Student ${student + 1} average: ${average.toFixed(2)}`);
// }
// // Output:
// // Student 1 average: 84.33
// Student 2 average: 91.67
// Student 3 average: 79.33

//Example 8: Matrix Addition

// let matrix1 = [[1, 2][(3, 4)]];
// let matrix2 = [[5, 6][(7, 8)]];
// let result = [];
// for (let i = 0; i < matrix1.length; i++) {
//   result[i] = [];
//   for (let j = 0; j < matrix1[i].length; j++) {
//     result[i][j] = matrix1[i][j] + matrix2[i][j];
//   }
// }
// console.log(result);
// Output: [[6, 8], [10, 12]]

//The for...of Loop

// for (let element of collection){
//     //use element directly
// }

//Example 1: Iterate Through Array

// let colors = ["Red", "Yellow", "Blue", "Green"];

// for (let color of colors) {
//   console.log(color);
// }
//Output: Red, Blue, Green, Yellow

//Example 2: Sum Array Elements

// let prices = [19, 99, 29, 99, 49, 99, 9, 99];
// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(`Total:$${total.toFixed(2)}`);
// //OUTPUT:Total:$502.00

// Example 3: Iterate Through String

// let word = "JavaScript";
// for (let char of word) {
//   console.log(char);
// }
//Output: J, a, v, a, S, c, r, i, p, t (each on new line)

// Example 4: Count Vowels in String

// let sentence = "Hello World";
// let vowels = "aeiouAEIOU";
// let count = 0;
// for (let char of sentence) {
//   if (vowels.includes(char)) {
//     count++;
//   }
// }
// console.log(`Number of vowels: ${count}`);
// Output: Number of vowels:3

// Example 5: Nested for...of with 2D Array

// let departments = [
//   ["Alice", "Bob", "Charlie"],
//   ["David", "Eve"],
//   ["Frank", "Grace", "Henry", "Ivy"],
// ];
// for (let department of departments) {
//   for (let employee of department) {
//     console.log(employee);
//   }
// }
// // Output: Alice, Bob, Charlie, David, Eve, Frank, Grace, Henry, Ivy

//Practical Application: Guessing Game

// Let's build a simple interactive game that demonstrates real-world loop usage.

//Example 1: Favorite Movie Guessing Game
// let favoriteMovie = "Doremon";
// let guess = "";
// while (guess !== favoriteMovie && guess !== "quit") {
//   guess = prompt("Guess my favourite movie(or type 'quit' to give up): ");
//   if (guess === favoriteMovie) {
//     console.log("Correct! You guessed it");
//     //output: Correct! You guessed it
//   } else if (guess === "quit") {
//     console.log(`You gave up. It was ${favoriteMovie}.`);
//     //output: You gave up. It was Doremon
//   } else {
//     console.log("❌Wrong! Try again.");
//   }
// }
// //output: You gave up. It was Doremon.

// Example 2: Number Guessing Game with Hints

// let secretNumber = Math.floor(Math.random() * 100) + 1;
// // Random 1-100
// let guess = 0;
// let attempts = 0;
// while (guess !== secretNumber) {
//   guess = Number(prompt("Guess a number between 1 and 100:"));
//   attempts++;
//   if (guess === secretNumber) {
//     console.log(`🎉 Correct! You guessed it in ${attempts} attempts!`);
//   } else if (guess < secretNumber) {
//     console.log(" To low!Try higher .");
//   } else {
//     console.log("📉Too high! Try lower.");
//   }
// }

//Example 3: Word Scramble Game

// let words = ["javascript", "programming", "computer", "developer"];
// let word = words[Math.floor(Math.random() * words.length)];
// let scrambled = word
//   .split("")
//   .sort(() => Math.random() - 0.5)
//   .join("");
// console.log(`Unscramble this word: ${scrambled}`);
// let guess = "";
// while (guess !== word) {
//   guess = prompt("Your answer:").toLowerCase();
//   if (guess === word) {
//     console.log("✅ Correct!");
//   } else {
//     console.log("❌ Try again!");
//   }
// }

// Example 5: Simple Quiz Game

// let questions = [
//   { q: "What is 5 + 3?", a: "8" },
//   { q: "Capital of France?", a: "paris" },
//   { q: "How many days in a week?", a: "7" },
// ];
// let score = 0;
// for (let item of questions) {
//   let answer = prompt(item.q).toLowerCase();
//   if (answer === item.a.toLowerCase()) {
//     console.log("✅ Correct!");
//     score++;
//   } else {
//     console.log(`❌ Wrong! The answer was ${item.a}`);
//   }
// }
// console.log(`Final Score: ${score}/${questions.length}`);

//Quick Reference

// For Loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
//output:0,1,2,3,4,5,6,7,8,9

// // While Loop
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
//output:0,1,2,3,4,5,6,7,8,9

// // Do-While Loop
// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j < 10);

//output:0,1,2,3,4,5,6,7,8,9

// // For...of Loop
// let arr = [1, 2, 3];
// for (let num of arr) {
//   console.log(num);
// }
//output:1,2,3,

// // Break
// for (let i = 0; i < 10; i++) {
//   if (i === 5) break;
//   console.log(i); // 0,1,2,3,4
// }

//output:0,1,2,3,4

// // Continue
// for (let i = 0; i < 5; i++) {
//   if (i === 2) continue;
//   console.log(i); // 0,1,3,4
// }
//output:0,1,3,4
