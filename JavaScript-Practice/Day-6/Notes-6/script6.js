// JavaScript Day 6: Object Literals & Math Object - Study Notes

// 1. Introduction to Object Literals

// Object literals are collections of key-value pairs used to store related data. Unlike arrays that use numeric
// indices, objects use named keys.

// Syntax: let objectName = { key1: value1, key2: value2 };

// Examples:

//// Example 1: Simple student object

// let student = {
//   name: "Alice",
//   age: 35,
//   grade: "A",
// };
// console.log(student.name);
// //output: Alice

// Example 2: Product object

// let product = {
// title: "Laptop",
// price: 45000,
// inStock: true
// };

// // Example 3: Geographic location

// let location = {
// latitude: "28.7041° N",
// longitude: "77.1025° E",
// city: "Delhi"
// };

// // Example 4: Book object

// let book = {
// title: "JavaScript Guide",
// author: "John Doe",
// pages: 350,
// published: 2024
// };

// // Example 5: Social media post

// let post = {
// username: "coder_dev",
// content: "Learning JavaScript!",
// likes: 150,
// comments: 23
// };

//2. Accessing Object Properties

// There are two ways to access values in an object: dot notation and bracket notation.

//Examples:

// Example 1: Using dot notation

// let student = { name: "Alex", age: 21, city: "Seattle" };

// console.log(student.name);
// //output: Alex

// console.log(student.age);
// //output:21

// console.log(student.city);
// //output: Seattle

// // Example 2: Using bracket notation

// console.log(student["city"]);
// //output: Seattle

// console.log(student["name"]);
//output: Alex

// Example 3: When to use bracket notation (spaces in key)

// let person = { "first name": "Jhon", "last name": "Doe" };
// console.log(person["first name"]);
// //output: "John"

//// Example 4: Using variables with bracket notation

// let key = "age";
// console.log(student[key]);

//output:21

// Example 5: Mixed access

// let car = { brand: "Toyota", model: "Camry", year: 2024 };
// console.log(car.brand);
// //output:"Toyota"
// console.log(car["model"]);
// //output: camry

// 3. Modifying Objects (Add, Update, Delete)

// Objects are mutable - you can change them after creation.

//Examples:

// Example 1: Updating existing properties

// let student = { name: "Alex", age: 21, city: "Seattle" };
// student.age = 22;
// student.city = "Boston";
// // console.log(student);
// //  output: { name: "Alex", age: 22, city: "Boston" }

// // Example 2: Adding new properties

// student.grade = "A+";
// student.major = "Computer Science";
// console.log(student);
// //output: { name: "Alex", age: 22, city: "Boston", grade: "A+", major: "Computer Science" }

// // Example 3: Deleting properties

// delete student.city;
// console.log(student);
//output: {name: 'Alex', age: 22, grade: 'A+', major: 'Computer Science'}

// Example 4: Multiple modifications

// let product = { name: "Phone", price: 30000 };
// console.log(product);
// //output:{name: 'Phone', price: 30000}

// //update
// product.price = 28000;
// console.log(product);

// //output:{name: 'Phone', price: 28000}

// //add
// product.brand = "samsung";
// console.log(product);
// //output:{name: 'Phone', price: 28000, brand: 'samsung'}

// //delete

// delete product.name;
// console.log(product);

//output: {price: 28000, brand: 'samsung'}

// Example 5: Using bracket notation for modifications

// let car = { brand: "Honda" };
// console.log(car);
// // output:{brand: 'Honda'}

// //add

// car["model"] = "Civic";
// car["year"] = 2024;
// console.log(car);
// // output: { brand: "Honda", model: "Civic", year: 2024 }

//4. Nested Objects (Object of Objects)

// Objects can contain other objects as values, creating nested structures. This is useful for organizing related data.

// Examples:

// Example 1: Basic nested objects

// let userDatabase = {
//   user1: { name: "Alice", grade: "A+", city: "Austin" },
//   user2: { name: "Bob", grade: "B", city: "Denver" },
// };

// console.log(userDatabase.user1.name);
// //output: Alice
// console.log(userDatabase.user2.grade);
// //output: B

// Example 2: Company departments
// let company = {
//   engineering: { employees: 50, manager: "Jhon" },
//   sales: { employees: 30, manager: "Sarah" },
//   hr: { employees: 10, manager: "Mike" },
// };
// console.log(company.engineering.employees);

// //output:50

// console.log(company.sales.manager);
//output: Sarah

// Example 3: Student records with subjects

// let students = {
//   student1: { name: "Emma", math: 85, science: 90 },
//   student2: { name: "Oliver", math: 78, science: 88 },
// };
// console.log(students.student1.math);
// //output: 85
// console.log(students.student2.science);
// //output: 88

// // Example 4: Product inventory by category

// let inventory = {
//   electronics: { laptops: 25, phones: 50 },
//   clothing: { shirts: 100, pants: 75 },
// };
// console.log(inventory.electronics.laptops);
// //output: 25
// console.log(inventory.clothing.shirts);
// //output: 100

// // Example 5: Accessing and modifying nested values

// let school = {
//   classA: { students: 30, teacher: "Ms. Smith" },
//   classB: { students: 28, teacher: "Mr. Brown" },
// };
// school.classA.students = 32;
// school.classB.teacher = "Ms. Johnson";
// console.log(school.classA.students);
// //output: 32
// console.log(school.classB.teacher);
// //output: "Ms. Johnson"

// 5. Array of Objects

// An array of objects is the most common data structure for storing collections of similar items. This is how most

// APIs return data.

//Examples:

// Example 1: List of students

// let students = [
//   { name: "Alice", age: 20, grade: "A" },
//   { name: "Bob", age: 21, grade: "B" },
//   { name: "Charlie", age: 19, grade: "A=" },
// ];
// console.log(students[0].name);
// //output: "Alice"
// console.log(students[1].grade);
// // output: "B"
// console.log(students.length);
// //output:  3

// Example 2: Product catalog

// let products = [
//   { id: 101, name: "Laptop", price: 45000 },
//   { id: 102, name: "Mouse", price: 500 },
//   { id: 103, name: "Keyboard", price: 1500 },
// ];
// console.log(products[0].name);
// //OUTPUT: "Laptop"
// console.log(products[2].price);
//output: 1500

// Example 3: Social media posts

// let posts = [
//   { username: "user1", content: "Hello World!", likes: 50 },
//   { username: "user2", content: "JavaScript is fun", likes: 120 },
//   { username: "user3", content: "Coding daily", likes: 85 },
// ];
// console.log(posts[1].username);
// // output: "user2"

// console.log(posts[0].likes);
// //output:  50

// Example 4: Course list

// let courses = [
//   { name: "Math", id: 101, credits: 3 },
//   { name: "Physics", id: 102, credits: 4 },
//   { name: "Chemistry", id: 103, credits: 3 },
// ];
// console.log(courses[0].credits);
// // //output:  3
// console.log(courses[1].name);
////output: "Physics"

// Example 5: Modifying array of objects

// let cars = [
//   { brand: "Toyota", model: "Camry", year: 2020 },

//   { brand: "Honda", model: "Civic", year: 2021 },
// ];
// console.log(cars);
//output: (2) [{…}, {…}]
// 0:{brand: 'Toyota', model: 'Camry', year: 2020}
// 1:{brand: 'Honda', model: 'Civic', year: 2021}

//modify

// cars[0].year = 2024;

// cars.push({ brand: "Ford", model: "Mustang", year: 2023 });
// console.log(cars);
//output: (3) [{…}, {…}, {…}]
// 0: {brand: 'Toyota', model: 'Camry', year: 2024}
// 1: {brand: 'Honda', model: 'Civic', year: 2021}
// 2: {brand: 'Ford', model: 'Mustang', year: 2023}

//6. The Math Object - Introduction

// The Math object is a built-in JavaScript object that provides mathematical constants and functions. You don't
// need to create it - it's always available.

// Examples:
// Examples:

//Example 1: Math constants

// console.log(Math.PI);
// //output: 3.141592653589793

// console.log(Math.E);
// //output: 2.718281828459045

// //Example 2: Absolute value

// console.log(Math.abs(-42));
// //output:42

// console.log(Math.abs(15));
// //output: 15
// console.log(Math.abs(-7.5));
// //output: 7.5

// //Example 3: Power (exponentiation)

// console.log(Math.pow(2, 3));
// //output: 8

// console.log(Math.pow(5, 2));
// // output:25
// console.log(Math.pow(10, 3));
// // output:1000

// //  Example 4: Rounding down and up

// console.log(Math.floor(4.9));
// // output:4

// console.log(Math.floor(1.9));
// // output:1

// console.log(Math.ceil(1.9));
// //output: 2

// console.log(Math.ceil(4.9));
// //output: 5

// //Example 5: Using Math.PI for calculations
// let radius = 5;
// let circumference = 2 * Math.PI * radius;
// let area = Math.PI * radius * radius;
// console.log(circumference);
// //output:31.4159265358979
// console.log(area);
// //output:78.53981633974483

// //7.Math.random() - Generating Random Numbers
// // Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).

// // Examples:

// // Example 1: Basic random decimal

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// // 0.6472... (different each time)
//0.72037793230810
//0.014008031273883503

//// Example 2: Random decimal scaled to 10
// let num = Math.random() * 10;
// console.log(num);
// //output: 4.637... (between 0 and 10)
// let num = Math.random() * 100;
// console.log(num);
//output: 44.637... (between 0 and 100)

//Example 3: Random decimal scaled to 100

// let percentage = Math.random() * 100;
// console.log(percentage);
//output:80.46770949336694 (between 0 and 100)

// Example 4: Multiple random numbers
// console.log(Math.random() * 5);
//output:2.396354329453339 (between 0 and 5) exclude 5
// console.log(Math.random() * 20);
// // output :14.4688896482835910 (between 0 and 20) exclude 20
// console.log(Math.random() * 50);
// //output :10.935920387028448 (between 0 and 50) exclude 50

// Example 5: Understanding the range
// console.log(Math.random());
// //output: Could be: 0.000... to 0.999...

// console.log(Math.random() * 10);

// //output: Could be: 0.000... to 9.999...
// console.log(Math.random() * 100);

// //output: Could be: 0.000... to 99.999...

/*8. Generating Random Integers

To generate random integers within a specific range, use Math.random() with Math.floor() .

Step-by-step process:

1. Generate decimal: Math.random()
2. Multiply by range size: * 10 (for 0-9)
3. Round down: Math.floor()
4. Add starting value: + 1 (for 1-10)*/

// Examples:
// // Example 1: Random integer from 1 to 10 (step by step)
// let step1 = Math.random();
// console.log(step1);

// //output:0.2872969631922121 (could be 0-1 but exclude 1)
// let step2 = step1 * 10;
// console.log(step2);
// //output:9.2872969631922121 (could be 0-10 but exclude 10)

// let step3 = Math.floor(step2);
// console.log(step3);

// // /output:7.2872969631922121 (could be 0-10 but exclude 10)
// let step4 = step3 + 1;
// console.log(step4);

// //Example 2: Random integer from 1 to 10 (one line)
// // let random = Math.floor(Math.random() * 10) + 1;
// // console.log(random);
// // output: // Could be: 1, 2, 3, 4, 5, 6, 7, 8, 9, or 10

// // Example 3: Random integer from 1 to 100
// let random = Math.floor(Math.random() * 100) + 1;
// console.log(random);
// // output: // Could be: 1, 2, 3, 4, 5, 6, 7, 8, 9,......... 100
// //
// // //Example 4: Random integer from 1 to 6 (dice roll)

// let diceRoll = Math.floor(Math.random() * 6) + 1;
// console.log("you rolled dice:" + diceRoll);

// // output: between 1 to 6

// // Example 5: Random integer from 1 to 5

// let rating = Math.floor(Math.random() * 5) + 1;
// console.log("your rating is:" + rating);
// //output:  1, 2, 3, 4, or 5

//9. Random Number Formula
// General Formula: Math.floor(Math.random() * (max - min + 1)) + min
// This formula generates a random integer between min and max (both inclusive).

// Example 1: Random number from 1 to 10

// let num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// console.log(num1);
//output: 1 to 10 (random number between 1 to 10)
// Simplifies to: Math.floor(Math.random() * 10) + 1

// Example 2: Random number from 5 to 10

// let num2 = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
// console.log(num2);
//output: 1 to 10 (random number between 1 to 10)
// Simplifies to: Math.floor(Math.random() * 6) + 5

// Example 3: Random number from 50 to 100

// let num3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
// console.log(num3);
//output: 50 to 100 (random number between 50 to 100)
// Simplifies to: Math.floor(Math.random() * 51) + 50

// Example 4: Random number from 20 to 30

// let num4 = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
// console.log(num4);
//output: 20 to 30 (random number between 20 to 30)

// Simplifies to: Math.floor(Math.random() * 11) + 20

// Example 5: Random number from -10 to 10
// let num5 = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
// console.log(num5);
// /output: -10 to 10 (random number between -10 to 10)
// Simplifies to: Math.floor(Math.random() * 21) - 10

//10. Practical Random Number Applications
// Using random numbers in real-world scenarios.

// Examples:

// Example 1: Random dice roll (1-6)

// let dice = Math.floor(Math.random() * 6 - 1 + 1) + 1;
// console.log("You Rolled:" + dice);
//output: 1 to 6 (random number between 1 to 6)

//// Example 2: Random choice from array
// let colors = ["Red", "Blue", "Green", "Yellow"];
// let randomIndex = Math.floor(Math.random() * colors.length);
// console.log("Random color: " + colors[randomIndex]);
//output: yellow (random color between red to yellow)

// // Example 3: Random quiz question selector

// let questions = ["Q1", "Q2", "Q3", "Q4", "Q5"];
// let randomQ = Math.floor(Math.random() * questions.length);
// console.log("your random questions is:" + questions[randomQ]);
//output: Q2 (random question between Q1 to Q5)

// Example 4: Random ID generator (1000-9999)

// let id = Math.floor(Math.random() * 9999) + 1000;
// console.log("Generated ID:" + id);

//output: 4666 (random ID between 1000 to 9999)

// Example 5: Random percentage (0-100)
// let percentage = Math.floor(Math.random() * 101);
// console.log("Random percentage:" + percentage + "%");
//output:Random percentage:74% (random percentage between 0 to 100)
