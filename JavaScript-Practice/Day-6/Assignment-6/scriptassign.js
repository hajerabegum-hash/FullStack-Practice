// JavaScript Day 6: Object Literals & Math Object - Assignment

// Section 1: Basic Object Literals

// Question 1: Create an object called car with the following properties:

// let car = {
//   brand: "Tesla",
//   model: "Model-3",
//   year: 2024,
//   color: "white",
// };
// console.log(car.brand, car.year);
//  //output: Tesla 2024

// Question 2: Create an object called movie with properties:
//title: "Inception"
//director: "Christopher Nolan"
//year: 2010
//rating: 8.8

//Access and print the director using bracket notation and the rating using dot notation.

//Answer 2:

// let movie={title:"Inception", director:"Christopher Nolan", year:2010, rating:8.8
// }
// console.log (movie["director"], movie.rating)

// output:- Christopher Nolan 8.8

//Section 2: Modifying Objects

//Question 1: Create an object student with:

//name: "John"
//age: 20
//grade: "B"

//Then
//Update the grade to "A"
//Add a new property city with value "Mumbai"
//Delete the age property
//Print the final object

//Answer: 1

//let student={
// name:"Jhon",
// age:20,
// grade:"B"
//}
//console.log(student)
//output:{
// name:"Jhon",
// age:20,
//grade:"B"}

//student.grade="A"
//student.city="Mumbai"
//delete student.age
//console.log(student)
//final output:- {
//name:"Jhon",
//grade:"A"
/// city: Mumbai"
//}

//Question 2: Create an object product with:

//name: "Laptop"
//price: 50000
//Then:
//Change the price to 45000
//Add a property brand with value "Dell"
//Add a property inStock with value true
//Print the updated object

//Answer:-2

//let product= {name: "Laptop", price:50000}
//console.log(product)
//output: {
// "name": "Laptop",
// "price": 50000
//product.price=45000
//product.brand=  "Dell"
//product.inStock=true
//console.log(product)
//updated output {
// "name": "Laptop",
//  "price": 45000,
//"brand": "Dell"
//inStock: true
//}

//Section 3: Nested Objects

//Question 1: Create a nested object called classroom with the following structure:
/*let classroom = {
 teacher: { name: "Ms. Smith", subject: "Math" },
 student1: { name: "Alice", grade: "A" },
 student2: { name: "Bob", grade: "B+" }
};

//Then:
//Print the teacher's name
//Print student1's grade
//Print student2's name

//Answer:1 
/*let classroom = {
 teacher: { name: "Ms. Smith", subject: "Math" },
 student1: { name: "Alice", grade: "A" },
 student2: { name: "Bob", grade: "B+" }
};
//output: {
 // "teacher": {
//    "name": "Ms. Smith",
//"subject": "Math"
  },
  "student1": {
    "name": "Alice",
    "grade": "A"
  },
  "student2": {
    "name": "Bob",
    "grade": "B+"
  }
}*/
//Print the teacher's name
//console.log(classroom.teacher.name)
//output:Ms. Smith

//Print the students1's grade
//console.log(classroom.student1.grade)
//output: A

//Print the students2's name
//console.log(classroom.student2.name)
//output: Bob

/*Question 2: Create an object company with nested objects:
 * /let company = {
 engineering: { employees: 40, manager: "John" },
 sales: { employees: 25, manager: "Sarah" }
};
 
/*Then:
Print the number of employees in engineering
Print the manager of sales department

//Update engineering employees to 45 and print the updated value
/*Answer:-2*/

/*let company = {
 engineering: { employees: 40, manager: "John" },
 sales: { employees: 25, manager: "Sarah" }
};
//console.log(company)
//output:

/*{
 engineering: { employees: 40, manager: "John" },
 sales: { employees: 25, manager: "Sarah" }
};*/
//Print the number of employees in engineering
//console.log(company.engineering.employees)
//output: 40

//Print the manager of sales department

//console.log(company.sales.manager)
//output:Sarah

//Update engineering employees to 45 and print the updated value

//company.engineering.employees=45
//console.log(company.engineering.employees)

//output: 45

/*Section 4: Array of Objects
 *
 */
/*Question 1: Create an array called students containing three student objects:
Student 1: name: "Emma", age: 20, grade: "A"
Student 2: name: "Liam", age: 21, grade: "B"
Student 3: name: "Olivia", age: 19, grade: "A+"
Then:
Print the name of the first student
Print the grade of the third student
Print the total number of students*/

//Answer :1

/*let students=[
{name:"Emma", age:20, grade:"A"},
{name: "Liam", age: 21, grade: "B"},
{name: "Olivia", age: 19, grade: "A+"}
]
//console.log(students)
//output: [
 /* { name: 'Emma', age: 20, grade: 'A' },
  { name: 'Liam', age: 21, grade: 'B' },
  { name: 'Olivia', age: 19, grade: 'A+' }
]*/

//Print the name of the first student

//console.log(students[0].name)
//output:Emma

//Print the grade of the third student
//console.log(students[2].grade)
//output: A+

//Print the total number of students

//console.log(students.length)
//output:3

/*Question 2: Create an array called products with these objects:
Product 1: id: 101, name: "Phone", price: 30000
Product 2: id: 102, name: "Laptop", price: 55000
Product 3: id: 103, name: "Tablet", price: 20000
Then:
Print the name of the second product
Print the price of the first product
Add a new product: id: 104, name: "Smartwatch", price: 15000
Print the total number of products*/

/*let products=[
{id: 101, name: "Phone", price: 30000},
{id: 102, name: "Laptop", price: 55000},
{id: 103, name: "Tablet", price: 20000}]
//console.log(products)
/*output:{id: 101, name: "Phone", price: 30000},
{id: 102, name: "Laptop", price: 55000},
{id: 103, name: "Tablet", price: 20000}*/

//Print the name of the second product

//console.log(products[1].name)
//output: Laptop

//Print the price of the first product

//console.log(products[0].price)
//output:300000

//Add a new product: id: 104, name: "Smartwatch", price: 15000

//products.push({id: 104, name: "Smartwatch", price: 15000});
//console.log(products[3].name)
//output: smartwatch

//Print the total number of products
//console.log(products.length)
//output: 4

/*Section 5: Complex Array of Objects
Question 1: Create an array posts with social media post objects:
Post 1: username: "tech_guru", content: "Learning JavaScript!", likes: 150
Post 2: username: "code_ninja", content: "Arrays are awesome", likes: 200
Then:
Print the content of the first post
Print the likes of the second post
Update the likes of the first post to 175
Print the updated likes
*/

/*let posts = [
  {username: "tech_guru", content: "Learning JavaScript!", likes: 150},
  {username: "code_ninja", content: "Arrays are awesome", likes: 200}
];
//console.log(posts)
//output: [
 // {username: "tech_guru", content: "Learning JavaScript!", likes: 150},
 // {username: "code_ninja", content: "Arrays are awesome", likes: 200}
//]

//Print the content of the first post
//console.log(posts[0].content)
//output: learning javascript!

//Print the likes of the second post
//console.log(posts[1].likes)

//output:200

//Update the likes of the first post to 175
//posts[0].likes=175
//console.log(posts[0].likes)
//output:175

//Print the updated likes
//console.log(posts[0].likes)
//output:175

/*Question 2: Create an array courses containing:
Course 1: name: "JavaScript", duration: 40, instructor: "John"
Course 2: name: "Python", duration: 35, instructor: "Sarah"
Course 3: name: "React", duration: 30, instructor: "Mike"
Then:
Print the instructor of the second course
Print the duration of the first course
Change the duration of "React" to 32 hours
Print all course names (access each index separately)*/

// let courses = [
//   { name: "JavaScript", duration: 40, instructor: "John" },
//   { name: "Python", duration: 35, instructor: "Sarah" },
//   { name: "React", duration: 30, instructor: "Mike" },
// ];
// console.log(courses);
// /*output: {name: "JavaScript", duration: 40, instructor: "John"},
// {name: "Python", duration: 35, instructor: "Sarah"},
// {name: "React", duration: 30, instructor: "Mike"}*/

// //Print the instructor of the second course

// //console.log(courses[1].instructor)
// //output:sarah

// //Print the duration of the first course
// //console.log(courses[0].duration)
// //output:- 40

// //Change the duration of "React" to 32 hours

// courses[2].duration = 32;
// console.log(courses[2].duration);
//output: 32

//Print all course names (access each index separately)*/
//console.log(courses[0].name)
//console.log(courses[1].name)
//console.log(courses[2].name)
//output: JavaScript , Python ,React

//6. Math Object - Introduction
// The Math object is a built-in JavaScript object that provides mathematical constants and functions. You don't
// need to create it - it's always available.

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

let num=Math.floor(Math.)