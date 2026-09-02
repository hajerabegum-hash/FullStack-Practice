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

//Example 3: Get passing grades

// let grades = [45, 78, 89, 34, 92, 56, 67];
// let passing = grades.filter((grade) => grade >= 50);
// console.log(passing);
// //output: [78, 89, 92, 56, 67]

// Example 4: Filter by string length

// let words = ["hi", "hello", "bye", "goodbye", "hey"];
// let longWords = words.filter((word) => word.length > 3);
// console.log(longWords);
//output: ["hello", "goodbye"]

//Example 5: Get adults only

// let people = [
//   { name: "John", age: 17 },
//   { name: "Sarah", age: 22 },
//   { name: "Mike", age: 15 },
//   { name: "Emma", age: 25 },
//   { name: "Tom", age: 16 },
// ];
// let adults = people.filter((person) => person.age >= 18);
// console.log(adults);
//output: [{ name: "Sarah", age: 22 }, { name: "Emma", age: 25 }]

//Example 6: Get names starting with 'A'

// let names = ["Alice", "Bob", "Andrew", "Charlie", "Amanda"];
// let aNames = names.filter((name) => name[0] === "A");
// console.log(aNames);
// //output: ["Alice", "Andrew", "Amanda"]

//Example 7: Filter affordable items

// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Monitor", price: 15000 },
// ];
// let affordable = products.filter((product) => product.price <= 2000);
// console.log(affordable);
//output: [{ name: "Mouse", price: 500 }, { name: "Keyboard", price: 1500 }]

//Example 8: Remove specific items

// let cart = ["apple", "banana", "apple", "mango", "apple", "orange"];
// let withoutApples = cart.filter((item) => item !== "apple");
// console.log(withoutApples);
// //output: ["banana", "mango", "orange"]log(myFav);

// Example 9: Get positive numbers

// let numbers = [5, -3, 8, -1, 0, 12, -7, 4];
// let positives = numbers.filter((num) => num > 0);
// console.log(positives);
//output: [5, 8, 12, 4]

// Example 10: Get completed tasks

// let tasks = [
//   { task: "Buy milk", done: true },
//   { task: "Clean room", done: false },
//   { task: "Study", done: true },
//   { task: "Exercise", done: false },
// ];
// let completed = tasks.filter((item) => item.done === true);
// console.log(completed);
//output: [{ task: "Buy milk", done: true }, { task: "Study", done: true }]

/*4. some and every Methods

What are they?

These methods test whether elements in an array satisfy a condition. Unlike filter , they don't return a new array
—they return a boolean ( true or false ).

4.1 The every Method

What is it?

Returns true only if ALL elements pass the test. If even one element fails, it returns false .

Real-World Analogy

🎢 Roller Coaster Safety Check: Before the roller coaster starts, every single safety bar must be locked. If
even ONE bar is unlocked, the ride cannot start. All or nothing!*/

//Syntax
// let result = array.every((element) => {
//   return condition; //true or false
// });

//Examples
// Example 1: Check if all are adults

// let ages = [20, 25, 18, 30, 22];
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults);
// //output: true

//let try .every with if else statement

// let ages = [20, 25, 13, 30];

// let finalAns = ages.every((elem) => {
//   if (elem >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(finalAns);
//output: false

//Example 3: Check if all numbers are positive

// let numbers = [5, 10, 15, 20];
// let allPositive = numbers.every((num) => num > 0);
// console.log(allPositive);
// //output: true

//example for false
// let num = [2, 3, 4, -6];
// let ans = num.every((elem) => elem > 0);
// console.log(ans);
//output: false  (false because -6 is <0)

// Example 4: Check if all students passed

// let marks = [78, 85, 92, 67, 89];
// let allPassed = marks.every((mark) => mark >= 50);
// console.log(allPassed);
//output: true

// Example 5: Check if all products are in stock

// let products = [
//   { name: "Laptop", inStock: true },
//   { name: "Mouse", inStock: true },
//   { name: "Keyboard", inStock: false },
// ];
// let allAvailable = products.every((product) => product.inStock === true);
// console.log(allAvailable);
//output: false

/*4.2 The some Method

What is it?

Returns true if AT LEAST ONE element passes the test. Even if 99 fail and 1 passes, it returns true .

Real-World Analogy

🎰 Lottery Tickets: You bought 10 lottery tickets. To win, you only need some (just ONE) ticket to match the
winning number. You don't need all 10 to match!

Syntax*/

// let result = array.some((element) => {
//   return condition; // true or false
// });

//Examples
// Example 1: Check if any teenager exists

// let ages = [20, 25, 17, 30, 22];
// let hasTeenager = ages.some((age) => age < 18);
// console.log(hasTeenager);
//output: true (17 is a teenager)

// Example 2: Check if any negative number

// let numbers = [5, 10, --3, 20, 15];
// let hasNegative = numbers.some((num) => num < 0);
// console.log(hasNegative);
//output: true

//  Example 3: Check if any student failed
// let marks = [78, 85, 92, 45, 89];
// let anyoneFailed = marks.some((mark) => mark < 50);
// console.log(anyoneFailed);
//output: true (45 < 50)

// Example 4: Check if any product is cheap

// let prices = [1500, 2000, 450, 3000];
// let hasCheapItem = prices.some((price) => price < 500);
// console.log(hasCheapItem);
// //output: true (450 < 500)

// Example 5: Check if any task is incomplete

// let tasks = [
// { task: "Buy milk", done: true },
// { task: "Clean room", done: false },
// { task: "Study", done: true }
// ];
// let hasIncomplete = tasks.some((item) => item.done === false);
// console.log(hasIncomplete); // true

//lets try .some with if else statement

// let ages = [23, 53, 15, 1, 16, 14, 24];
// let ans = ages.some((elem) => {
//   if (elem >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(ans);
//output: true

//4.3 Comparing some and every

// Side-by-side Examples

// Example 1: Age checking

// //every all must be adults
// let age = [23, 35, 13, 23, 56];
// let adults = age.every((agee) => agee >= 18);
// console.log(adults);
//output: false

// //some atleast one should be adults
// let age = [23, 35, 13, 23, 56];
// let adults = age.some((agee) => agee >= 18);
// console.log(adults);
//output: true

// // Example 2: Empty cart scenario

// let prices = [150, 200, 300];

// // every - ALL must be affordable
// let allAffordable = prices.every((price) => price <= 100);
// console.log(allAffordable);
// //output: false

// // some -
// // // some - AATT LEAST LEAST ONE must be affor ONE must be affordable dable
// let someAffordable = prices.some((price) => price <= 100);
// console.log(someAffordable);
//output: false

//Practice Problems

// Problem 1 (forEach)

// Create an array of 5 cities. Use forEach to print "I want to visit [city name]" for each city.

// let cities = ["London", "Paris", "luxemberg"];
// cities.forEach((city) => {
//   console.log(`I want to visit:${city}`);
// });

//output: I want to visit:London
//  I want to visit:Paris
// I want to visit:luxemberg

//Problem 2 (map)

// // Create an array of 5 numbers. Use map to create a new array where each number is increased by 100.

// let array = [1, 2, 3, 3, 5];
// let increased = array.map((elem) => elem + 100);
// console.log(increased);
//output: [101, 102, 103, 103, 105]

// Problem 3 (filter)

// Create an array of numbers from 1 to 20. Use filter to get only numbers divisible by 3.

// let arrayNum = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// let divisibleNum = arrayNum.filter((elem) => elem % 3 == 0);
// console.log(divisibleNum);
// //output: [3, 6, 9, 12, 15, 18]

// Problem 4 (map + objects)

// Create an array of student objects with name and marks . Use map to create a new array of objects that
// includes a grade property (A for >= 90, B for >= 75, C for >= 50, F for < 50).

// let students = [
//   { name: "Alice", marks: 45 },
//   { name: "Sandy", marks: 88 },
//   { name: "Giggy", marks: 90 },
//   { name: "jinny", marks: 23 },
//   { name: "simmu", marks: 36 },
// ];

// // [{}, {}]
// let result = students.map((studentObj) => {
//   let calculateGrade;

//   if (studentObj.marks >= 90) {
//     calculateGrade = "A";
//   } else if (studentObj.marks >= 75) {
//     calculateGrade = "B";
//   } else if (studentObj.marks >= 50) {
//     calculateGrade = "C";
//   } else if (studentObj.marks < 50) {
//     calculateGrade = "F";
//   }
//   let newObj = {
//     name: studentObj.name,
//     marks: studentObj.marks,
//     grade: calculateGrade,
//   };

//   return newObj;
// });
// console.log(result);
//output:name: 'Alice', marks: 45, grade: 'F'}
// 1;
// :
// {name: 'Sandy', marks: 88, grade: 'B'}
// 2
// :
// {name: 'Giggy', marks: 90, grade: 'A'}
// 3
// :
// {name: 'jinny', marks: 23, grade: 'F'}
// 4
// :
// {name: 'simmu', marks: 36, grade: 'F'}

//Problem 5 (filter + objects)

// Create an array of products with name and price . Use filter to get products priced between ₹500 and ₹2000.

// const products = [
//   { name: "Wireless Mouse", price: 450 },
//   { name: "Keyboard", price: 1200 },
//   { name: "Monitor", price: 7500 },
//   { name: "USB Cable", price: 150 },
//   { name: "Power Bank", price: 1800 },
//   { name: "Bluetooth Speaker", price: 2000 },
//   { name: "Laptop Stand", price: 650 },
// ];

// // Filter products priced between ₹500 and ₹2000 (inclusive)
// const filteredProducts = products.filter((product) => {
//   // Ensure price is a valid number before filtering
//   return (
//     typeof product.price === "number" &&
//     product.price >= 500 &&
//     product.price <= 2000
//   );
// });

// // Output the filtered products
// console.log("Products priced between ₹500 and ₹2000:");
// console.table(filteredProducts);

// Problem 6 (every)
// Create an array of 5 numbers. Check if all numbers are greater than 10.

// let numbers = [14, 72, 53, 47, 45];
// let number = numbers.every((elem) => elem > 10);
// console.log(number);
// //output: true

//Problem 7 (some)
// Create an array of words. Check if any word contains the letter 'z'.

// Create an array of words
const words = ["apple", "banana", "grape", "zebra", "mango"];

// Function to check if any word contains the letter 'z'
function containsZ(wordArray) {
  if (!Array.isArray(wordArray)) {
    throw new Error("Input must be an array of strings.");
  }

  // Use Array.prototype.some() for efficiency
  return wordArray.some((word) => {
    if (typeof word !== "string") return false; // Ignore non-string entries
    return word.toLowerCase().includes("z"); // Case-insensitive check
  });
}

// Check and display result
try {
  if (containsZ(words)) {
    console.log("At least one word contains the letter 'z'.");
  } else {
    console.log("No word contains the letter 'z'.");
  }
} catch (error) {
  console.error("Error:", error.message);
}
