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
// const words = ["apple", "banana", "grape", "zebra", "mango"];

// let newWord = words.some((word) => {
//   if (word.includes("z")) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(newWord);
//output: ture (because in the array words contain letter "z")

//Problem 8 (Combining methods)

// Create an array of numbers. First filter out odd numbers, then use map to square the remaining even numbers.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddNum = numbers.filter((elem) => elem % 2 == 1);
// console.log(oddNum);
// //output: [1, 3, 5, 7, 9]
// let evenNum = numbers.filter((elem) => elem % 2 == 0);
// console.log(evenNum);
// //output: [2, 4, 6, 8, 10]
// let mappedNum = evenNum.map((elem1) => elem1 * elem1);
// console.log(mappedNum);
//output:[4, 16, 36, 64, 100]

/*1. The reduce Method

What is it?

reduce executes a reducer function on each element of the array, resulting in a single output value. It "reduces"

an array of values into one value.

Real-World Analogy

🐷 Piggy Bank: You have coins (array elements) scattered on a table. You pick them up one by one and add

them to your piggy bank (accumulator). At the end, you have one total amount saved.

Syntax*/

// let amount = coins.reduce((accumulator, element) => {
//   //RETURN UPDATED ACCUMULATOR
// }, initialValue);

// Examples
// Example 1: Sum of all numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = numbers.reduce((acc, elem) => {
//   return acc + elem;
// }, 0);
// console.log(sum);
// //output:55

// example_2
// let numbers1 = [1, 2, 3, 4, 5];
// let sum1 = numbers1.reduce((total, num) => {
//   return total + num;
// }, 0);
// console.log(sum1);
//output: 15
// Step-by-step execution:
// total = 0, num = 1 → return 0 + 1 = 1
// total = 1, num = 2 → return 1 + 2 = 3
// total = 3, num = 3 → return 3 + 3 = 6
// total = 6, num = 4 → return 6 + 4 = 10
// total = 10, num = 5 → return 10 + 5 = 15

// Example 2: Product of all numbers

// let numbers = [1, 3, 4, 5];
// let productOfNum = numbers.reduce((acc, elem) => {
//   return acc * elem;
// });
// console.log(productOfNum);
//output: 60
//example-2

//  let numbers = [2, 3, 4, 5];
// let product = numbers.reduce((result, num) => result * num, 1);
// console.log(product);
// output: 120 (2 * 3 * 4 * 5)

// Example 3: Calculate total price

// let cart = [
//   {
//     item: "Shirt",
//     size: "XL",
//     price: 700,
//   },
//   {
//     item: "Shirt",
//     size: "XL",
//     price: 500,
//   },
//   {
//     item: "Shirt",
//     size: "XL",
//     price: 600,
//   },
// ];
// let total = cart.reduce((acc, cart) => acc + cart.price, 0);
// console.log(total);
//output: 1800

// let cart = [
//   { item: "Shirt", price: 500 },
//   { item: "Shoes", price: 1200 },
//   { item: "Hat", price: 300 },
// ];
// let total = cart.reduce((sum, product) => sum + product.price, 0);
// console.log(total);
// output: 2000

//Example 4: Count occurrences

// let fruits = [
//   "Apple",
//   "Cherry",
//   "Orange",
//   "Banana",
//   "Apple",
//   "Cherry",
//   "Orange",
//   "Banana",
// ];

// {
// Apple: 2,
// Cherry: 2,
// Orange: 2,
// Bananna: 2
// }

// counter = {apple: 1, cherry: 1, orange: 1, banana: 1}
// // fruit = Apple

// let countFruits = fruits.reduce((counter, fruit) => {
//   if (fruit in counter) {
//     counter[fruit] = 1;
//   } else {
//     console.log("this line ran");
//     console.log(counter[fruit]);
//     counter[fruit] = counter[fruit] + 1;
//   }

//   return counter;
// }, {});

// console.log(countFruits);

//Example 5: Flatten nested arrays

// let nested = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
// ];
// let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// console.log(flat);
//output: [1, 2, 3, 4, 5, 6, 7, 8]

//Example 6: Find longest word

// let words = ["Hello", "Hi", "Bye", "Good Morning", "See You"];
// let longest = words.reduce((longest, word) => {
//   return word.length > longest.length ? word : longest;
// }, "");
// console.log(longest);
// //output: Good Morning

// let words = ["hi", "hello", "hey", "goodbye"];
// let longest = words.reduce((longest, word) => {
//   return word.length > longest.length ? word : longest;
// }, "");
// console.log(longest);
// output: "goodbye"

//Example 7: Group by category

// let item = [
//   { name: "Apple", type: "fruit" },
//   { name: "Carrot", type: "Vegetables" },
//   { name: "Banana", type: "fruit" },
//   { name: "Tomato", type: "Vegetables" },
// ];

// let grouped = item.reduce((result, group) => {
//   if (!result[group.type]) {
//     result[group.type] = [];
//   }
//   result[group.type].push(group.name);
//   return result;
// }, {});
// console.log(grouped);

// //output: Vegetables
// :
// (2) ['Carrot', 'Tomato']
// fruit
// :
// (2) ['Apple', 'Banana']

// let items = [
//   { name: "Apple", type: "fruit" },
//   { name: "Carrot", type: "vegetable" },
//   { name: "Banana", type: "fruit" },
//   { name: "Potato", type: "vegetable" },
// ];
// let grouped = items.reduce((result, item) => {
//   if (!result[item.type]) {
//     result[item.type] = [];
//   }
//   result[item.type].push(item.name);
//   return result;
// }, {});
// console.log(grouped);
// { fruit: ["Apple", "Banana"], vegetable: ["Carrot", "Potato"] }

//Example 8: Calculate average

// let scores = [23, 55, 76, 68, 89, 79];
// let sum = scores.reduce((total, score) => total + score, 0);
// let average = sum / scores.length;
// console.log(average);
//output:65

//Examples
// Example 1: Find maximum number

// let numbers = [45, 78, 23, 89, 34, 12];
// let max = numbers.reduce((maximun, number) => {
//   return number > maximun ? number : maximun;
// });
// console.log(max);
//output: 89

//Example 2: Find maximum with initial value

// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let maximumNum = numbers.reduce((maximum, number) => {
//   return number > maximum ? number : maximum;
// });
// (console.log(maximumNum), [0]);
//output: 90

//Example 3: Find minimum number

// let numbers = [32, 23, 45, 11, 1, 46, 76, 7, 0, -7];
// let minimumNum = numbers.reduce((minimum, number) => {
//   return number < minimum ? number : minimum;
// });
// console.log(minimumNum);
//output: -7

// let numbers = [45, 78, 23, 89, 34, 12];
// let min = numbers.reduce((minimum, num) => {
//   return num < minimum ? num : minimum;
// });
// console.log(min);
// output:12

//Example 4: Find highest price

// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 500 },
//   { name: "Monitor", price: 15000 },
// ];
// let maxPrice = products.reduce((max, product) => {
//   return product.price > max ? product.price : max;
// }, 0);
// console.log(maxPrice);
//output: 50000

//Example 5: Find student with highest marks

// let students = [
// { name: "Rahul", marks: 85 },
// { name: "Priya", marks: 92 },
// { name: "Arjun", marks: 78 }
// ];
// let topper = students.reduce((highest, student) => {
// return student.marks > highest.marks ? student : highest;
// });
// console.log(topper);
//output: { name: "Priya", marks: 92 }

//3. Default Parameters

// What is it?

// Default parameters allow you to set fallback values for function parameters. If no argument is provided (or
// undefined is passed), the default value is used.

//Syntax

// function functionName(param1 = defaultValue1, param2 = defaultValue2) {
// function body
// }

// Examples
// Example 1: Simple greeting

// function greet(name = " ALice", age = "23") {}
