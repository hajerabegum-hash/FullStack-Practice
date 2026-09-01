/*JavaScript Day 9: Modern Array Methods & ES6 Features

Study Notes for Home Revision

1. Introduction to Modern Array Methods

Modern JavaScript gives us powerful built-in methods to work with arrays. Instead of writing for loops, we
can use these methods to make our code cleaner and more readable.

Why use these methods?
Less code to write
Easier to understand
Fewer bugs
More expressive

2. The forEach Method*/

/*What is it?

forEach executes a function once for each element in an array. It's like a modern replacement for the traditional
for loop.
Real-World Analogy

🎓 Teacher Taking Attendance: A teacher goes to every student one by one and marks them present. They
don't skip anyone, and they follow the order.
Syntax*/

// array.forEach((elem, index, array) => {});

// Examples

// Example 1: Print all numbers

// let numbers = [20, 30, 40, 50];
// numbers.forEach((num) => {
//   console.log(num);
// });
// Output: 10, 20, 30, 40

// // Example 2: Add price symbol
// let prices = [99, 149, 299];
// prices.forEach((price) => {
//   console.log(`$${price}`);
// });
// Output: $99, $149, $299

// //Example 3: Print with index
// let fruits = ["Apple", "Banana", "Cherry", "Mango"];
// fruits.forEach((fruit, index) => {
//   console.log(`${index}. ${fruit}`);
// });
// Output: 1. Apple, 2. Banana, 3. Cherry, 4. Mango

//Example 4: Calculate total in forEach

// let scores = [85, 90, 78, 92];
// let total = 0;
// scores.forEach((score) => {
//   total += score;
// });
// console.log(`Our Totalscore is: ${total}`);
// //output: Our Totalscore is: 345

//Example 5: Modify external array

// let names = ["alice", "bob", "charlie"];
// let capitalizedNames = [];
// names.forEach((name) => {
// capitalizedNames.push(name.toUpperCase());
// });
// console.log(capitalizedNames); // ["ALICE", "BOB", "CHARLIE"]

//3. The map Method

// What is it?

// map creates a new array by transforming each element. It "maps" each input to an output.

// Real-World Analogy

// 🏭 Factory Assembly Line: Raw metal sheets (input array) go in → they get stamped and painted (function)
// → finished car doors (output array) come out.
//Syntax

// let newArr = Array.map((element) => {
//   return transformedElement;
// });

/*Key Point
map always returns a new array
The original array remains unchanged
The new array has the same length as the original

Examples

Example 1: Double all numbers*/

// let numbers = [1, 2, 3, 4];

// let newArr = numbers.map((number) => {
//   return number * 2;
// });
// console.log(newArr);
// //output : [2, 4, 6, 8]
// console.log(numbers);
//output : [1, 2, 3, 4]

//Example 2: Convert to uppercase

// let names = ["alice", "bob", "charlie"];

// let upperCaseNames = names.map((name) => name.toUpperCase());
// console.log(upperCaseNames);
// //output : ["ALICE", "BOB", "CHARLIE"]

//Example 3: Extract properties from objects

// let students = [
//   { name: "Alice", age: 77 },
//   { name: "Bob", age: 88 },
//   { name: "Cherry", age: 44 },
// ];
// let studentName = students.map((student) => student.name);
// console.log(studentName);
// //output : ['Alice', 'Bob', 'Cherry']

// Example 4: Add sales tax

// let prices = [200, 300, 400];
// let taxPrice = prices.map((price) => price * 1.18);
// console.log(taxPrice);
//output: [236, 354, 472]

//Example 5: Create HTML elements
// let items = ["Home", "About", "Contact"];
// let menuItems = items.map((item) => `<li>${item}</li>`);
// console.log(menuItems);
// output: ["<li>Home</li>", "<li>About</li>", "<li>Contact</li>"]

/*4. The filter Method

What is it?

filter creates a new array containing only elements that pass a test (return true ).
Real-World Analogy
 
🛂 Security Checkpoint: Only passengers with valid tickets (condition = true) pass through to the waiting
area. Others are turned away.*/

//syntax

// let newArray = array.filter((element) => {
//   return condition;
//
// });
//output: true or false

// Examples

// // Example 1: Get even numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens);
// //output: [2, 4, 6, 8]

//Example 2: Get passing grades

// let grades = [45, 78, 89, 34, 92, 56];
// let passing = grades.filter((grade) => grade >= 50);
// console.log(passing);
// // output:[78, 89, 92, 56]
