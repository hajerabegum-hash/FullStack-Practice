// JavaScript Day 2 - Revision Notes

// 1. Characters Allowed

// let userName123;

// let _privateVariable;

// let $specialValue;

// let total_AMOUNT;

// 2 .No Spaces

// Invalid

// let user name;
// //output: ❌ Error

// let total cost;
// //output: ❌ Error

// Valid alternatives

// let userName;
// //output: ✓ Use camelCase

// let user_name;
// //output: ✓ Use underscores

// let totalCost;
// //output: ✓ Use camelCase

// 3.Starting Character

// Valid

// let age;
//  //output: ✓ Starts with letter

// let _private;
//  //output: ✓ Starts with underscore

// let $price;
//  //output: ✓ Starts with dollar sign

// Invalid

// let 123name;
// // output:❌ Cannot start with digit

// let 9lives;
// //output: ❌ Cannot start with digit

// 4.Case Sensitivity

// let userAge = 25;

// let userage = 30;

// let UserAge = 35;

// let USERAGE = 40;

// // These are FOUR DIFFERENT variables!

// console.log(userAge);
// // output:25

// console.log(userage);
// //output: 30

// console.log(UserAge);
// //output: 35

// console.log(USERAGE);
// //output:40

// 5 .Reserved Words

// Common reserved words include:

// let , const , var (variable declarations)
// if , else , while , for (control structures)
// function , return (function-related)
// true , false , null , undefined (special values)
// class , extends , import , export (advanced features)

// Invalid - using reserved words

// let let = 10;
// // output:❌ Error

// let if = 20;
// //output: ❌ Error

// let function = 30;
// //output: ❌ Error

// Valid alternatives

// let letVariable = 10;
//  //output: ✓

// let ifCondition = 20;
//  //output: ✓

// let functionName = 30;
//  //output: ✓

// Common Mistakes to Avoid

//1. Hyphens vs Underscores

// Invalid

// let user--name = "Alice";
// //output: ❌ JavaScript thinks: user minus name

// Valid

// let user_name = "Alice";
// //output: ✓ Underscore is allowed

// let userName = "Alice";
// //output: ✓ CamelCase (preferred)

// 2.Starting with Numbers

// Invalid

// let 1stPlace = "Gold";
// //output: ❌ Cannot start with digit

// let 99balloons = 99;
// //output: ❌ Cannot start with digit

// // Valid

// let firstPlace = "Gold";
// //output: ✓ Spell out the number

// let place1st = "Gold";
// //output: ✓ Number at end is fine

// let balloons99 = 99;
//  //output: ✓ Number at end is fine

// 3.Special Characters

// let my$variable=10;
// console.log(my$variable)
//  output:10

// let my#variable=10;
// console.log(my#variable)
// output:invalid # is not allowed

// Remember: Only _ and $ are allowed as special characters

// let my_variable = 10;
// console.log(my_variable)
// // ✓ output:10

// let my$variable = 10; // ✓
// console.log(my$variable)
// output:10;

// Naming Conventions

// 1.camelCase (Recommended ⭐ )
// let userName = "Alice";
// console.log(userName)
//  output:Alice

// let totalPrice = 99.99;
// console.log(totalPrice )
// ouput: 99.99

// let isLoggedIn = true;
// console.log(isLoggedIn)
// output:true

// let calculateTotalCost = function() { };
// console.log(calculateTotalCost)
//  output f() {}

// let getUserInfo = function() { };
// console.log(getUserInfo)
// output:f () {};

// 2.snake_case

// let user_name = "Alice";
// console.log(user_name)
// // output Alice

// let total_price = 99.99;
// console.log(total_price)
// output:99.99

// let is_logged_in = true;
// console.log(is_logged_in)
// // output:true

// let calculate_total = function() { };
// console.log(calculate_total)
// // output: f() {};

// 3.PascalCase

// Classes and Constructors
// class UserAccount {
// constructor(name) {
// this.name = name;
// }
// }
// console.log(UserAccount);
// output :class UserAccount {
// constructor(name) {
// this.name = name;
// }
// }

// 4.SCREAMING_SNAKE_CASE :all uppercase letters with _ underscore

// const MAX_LOGIN_ATTEMPTS = 3;
// const API_KEY = "abc123xyz";
// const PI = 3.14159;
// const DATABASE_URL = "mongodb://localhost:27017";

// 5.Hungarian Notation (Rarely Used) Some developers prefix variables with type indicators:

// let strName = "Alice"; // str = string

// console.log(strName);
//  output:Alice

// let numAge = 25; // num = number
// let bIsActive = true; // b = boolean
// Booleans and Dynamic Typing
// let isLoggedIn = true;
// console.log(isLoggedIn);
//  output:true

// let isOver18 = false;
// console.log(isOver18);
// output:false

// let hasPermission = true;
// console.log(hasPermission);
// output:true

// let isEmailVerified = false;
// console.log(isEmailVerified);
// output:false

// Boolean in Conditions

// let isStudent = true;
// if (isStudent){
//     console.log("student discount applied");
// }
// } else{
//     console.log("Regular price.")
// }

// let age = 20;
// let isAdult = age >= 18;
// //output: true

// console.log(isAdult);
//  //output: true

// Dynamic Typing: JavaScript vs TypeScript

// JavaScript: Dynamically Typed
// let x = 5;  :x is a number
// console.log(typeof x);
// //output: "number"

// x = "hello"; // Now x is a string - ALLOWED!
// console.log(typeof x);
// //output: "string"

// x = true;  Now x is a boolean - ALLOWED!
// console.log(typeof x);
// //output: "boolean"

// x = [1, 2, 3]; // Now x is an array - ALLOWED!
// console.log(typeof x);
// // output:"object"

// TypeScript: Statically Typed

// let x: number = 5; // x must be a number
// console.log(x);
// //output: 5

// x = "hello";
// // output:❌ ERROR: Type 'string' is not assignable to type 'number'

// x = true; //
// output:❌ ERROR: Type 'boolean' is not assignable to type 'number'

// // This will only accept numbers

// x = 10;  ✓ This work

//Practical Comparison
// let userAge=25
// console.log(userAge);
// output:25

// userAge="twenty-five"
// console.log(userAge);
// output:twenty-five

// userAge=null
// console.log(userAge);
// output:null

// function calculateDiscount(age) {
// return age * 0.1; // What if age is a string?
// }
// Length Property
// let name="Alice";
// console.log(name)
// //output:Alice

// let message = "Hello, World!";
// console.log(message.length);
// //output 13

// let empty = "";
// console.log(empty.length);
// // output:0

// Common String Methods (Preview)
// let text = "Hello, World!";

// // Convert to uppercase

// console.log(text.toUpperCase());
//  // output "HELLO, WORLD!"

// Convert to lowercase
// console.log(text.toLowerCase());
// //output: "hello, world!"

// Extract part of string
// console.log(text.slice(0,5));
// //output "Hello"

// Replace text

// console.log(text.replace("World", "JavaScript"));
// // output:"Hello, JavaScript!"

// Escape Sequences
// let newLine = "First line\nSecond line";
// console.log(newLine);

// Output:
// First line
// Second line

// let tab="Name:\tAlice";
// console.log(tab);
// //output: Name: Alice

// let backslash = "This is a backslash: \\";
// console.log(backslash);
// Output: This is a backslash: \

// let quote = "She said, \"Hi!\"";
// console.log(quote);
// Output: She said, "Hi!"

// Common escape sequences:
// \n - New line
// \t - Tab
// \\ - Backslash
// \' - Single quote
// \" - Double quote
// \r - Carriage return

// String Indexing

// let city = "London";
// console.log(city[0]); // output"L" - first character
// console.log(city[1]); // output"o" - second character
// console.log(city[2]); // output"n" - third character
// console.log(city[3]); // output"d" - fourth character
// console.log(city[4]); // output"o" - fifth character
// console.log(city[5]); // output"n" - sixth (last) character

// First and Last Characters
// let word = "JavaScript";
// //first character

// let first=word[0]
// console.log(first);
// //output: j

// Last character using length
// let last = word[word.length - 1];
// console.log(last); // "t"

// // Why length - 1?
// // Because length is 10, but last index is 9 (0-based indexing)
// console.log(word.length);
// // output: 10

// console.log(word[9]);
// //output: "t"

// console.log(word[10]);
//  //output undefined (out of bounds)

//Example 1: Checking First Character

// let email = "alice@example.com";
// if (email[0] === '@') {
// console.log("Email cannot start with @");
// } else {
// console.log("Email format might be valid");
// }
//output : Email format might be valid

// Example 2: Getting Initials

// let firstName = "Alice";
// let lastName = "Smith";
// // let initials = firstName[0]+lastName[0]
// // console.log(initials);
// //output :AS

// //With dots

// let formalinitials= firstName[0]+"." +lastName[0]+"."
// console.log(formalinitials);
// // output: "A.S."

// Example 3: Character Validation

// let password = "Pass123";
// let firstChar = password[0];
// let lastChar = password[password.length -1];
// console.log("First character:", firstChar);
// //output: "P"

// console.log("Last character:", lastChar);
//ouput: "3"
// if (lastChar >= '0' && lastChar <= '9') {
// console.log("Password ends with a number");
// }
// Important Notes
// 1. Strings are Immutable: You cannot change individual characters
// let word = "Hello";
// word[0] = "J";
// // This does NOT work!

// console.log(word);
// // Still output: "Hello"

// // To "change" a string, create a new one

// let newWord = "J" + word.slice(1);
// console.log(newWord);
// output: "Jello"

// 2. Length vs Last Index

// let text = "Hello";
// console.log(text.length);
// //output: 5

// console.log(text[text.length]);
//  //output: undefined (index 5 doesn't exist)

//  console.log(text[text.length - 1]);
//output:"o" (correct last character)

//  3. Spaces Count Too

// let text = "Hello World";
// console.log(text.length);
// //output: 11 (space counts!)

// console.log(text[5]);
// //output: " " (space character)

// String Concatenation

// Concatenation means joining strings together. JavaScript provides the + operator for this purpose.
//basic Concatenation

// Joining two strings
// let firstName = "Alice";
// let lastName = "Smith";
// let fullName = firstName + lastName;
// console.log(fullName);
// output "AliceSmith"

// // Adding space

// let fullNameWithSpace = firstName + " " + lastName;
// console.log(fullNameWithSpace);
// output "Alice Smith"

//multiple concatenation

// let greeting = "Hello";
// let name = "World";
// let punctuation = "!";
// let message = greeting + ", " + name + punctuation;
// console.log(message);
// output "Hello, World!"
// Concatenating Numbers and Strings
// Number + String = String

// let score = 100;
// let message1 = "Your score is: " + score;
// console.log(message1);
// //output: "Your score is: 100"

// console.log(typeof message1);
// //output: "string"

// // String + Number = String

// let message2 = "Player " + 1;
// console.log(message2);
// //output "Player 1"

// // Multiple numbers and strings

// let age = 25;
// let message3 = "I am " + age + " years old";
// console.log(message3);
// // output: "I am 25 years old"

//Example 1: Building Messages

// let userName = "Bob";
// let points = 150;
// let welcomeMsg = "Welcome back, " + userName + "!";
// console.log(welcomeMsg);
// //output "Welcome back, Bob!"

// let scoreMsg = "You have " + points + " points.";
// console.log(scoreMsg);
// //output "You have 150 points."

// // Example 2: Creating URLs
// let domain = "example.com";
// let protocol = "https://";
// let page = "/about";
// let fullURL = protocol + domain + page;
// console.log(fullURL);
// //output: "https://example.com/about"

// // Example 3: Building File Names
// let fileName = "report";
// let fileType = ".pdf";
// let year = 2024;
// let fullFileName = fileName + "_" + year + fileType;
// console.log(fullFileName);
// output:"report_2024.pdf"

// the += Operator for Concatenation

// let message = "Hello";
// message += " ";
// //output message = message + " "

// message += "World";
// //output message = message + "World"

// message += "!";
// //output message = message + "!"

// console.log(message);
//  //output "Hello World!"

//  //example:

//  let htmlContent = "<div>";
// htmlContent += "<h1>Title</h1>";
// htmlContent += "<p>Paragraph</p>";
// htmlContent += "</div>";
// console.log(htmlContent);

// // Output: <div><h1>Title</h1><p>Paragraph</p></div>

//Important: Number Addition vs String Concatenation

// All numbers - addition
// console.log(10 + 20);
// //Output 30 (number addition)

// // String first - concatenation

// console.log("10" + 20);
// // Output"1020" (string concatenation)

// // Number first, then string - concatenation

// console.log(10 + "20");
//  //Output "1020" (string concatenation)

// // Mixed operations

// console.log(10 + 20 + "30");
// // Output"3030" (10+20=30, then "30"+"30")

// console.log("10" + 20 + 30);
//  // Output"102030" (all concatenation)

//Concatenation vs Template Literals

//Concatenation (hard to read)
// let name = "Alice";
// let age = 25;
// let city = "New York";
// let message = "My name is " + name + ", I am " + age + " years old, and I live in " + city + ".";
// console.log(message);
//output : My name is Alice, I am 25 years old, and I live in New York.

// Template Literal (easier to read) - We'll cover this next!
// let betterMessage = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;
// console.log(betterMessage);
// /output : My name is Alice, I am 25 years old, and I live in New York

//Null vs Undefined

//1. Variable declared but not initialized:

// let score;
// console.log(score);
// output: undefined

// console.log(typeof score);
//output: "undefined"

// 2. Function with no return value:

// function greet() {
//   console.log("Hello!");
//   //output:Hello!
//   // No return statement
// }

// let result = greet();
// console.log(result);
// //output: undefined

//3. Accessing non-existent object property:

// let user = { name: "Alice" };
// console.log(user.age);
//  //output undefined (property doesn't exist)

//  //4. Array element that doesn't exist:
// let colors = ["red", "blue"];
// console.log(colors[5]);
// output: undefined beacuse value is not defined

// 5. Function parameter not provided:

// function greet(name) {
// console.log(name);
// }
// greet();
// //output: undefined (no argument passed)

// Null

// 1. Intentionally setting something as empty:

// let currentUser = null;
// // output No user logged in

// console.log(currentUser);
// //output null

// console.log(typeof currentUser);
// // output "object" (this is a JavaScript quirk!)

// 2. Resetting a value:

// let winner = "Alice";
// console.log(winner);
// //output "Alice"

// // Game resets
// winner = null;
// console.log(winner);
// //output null (intentionally cleared)

// 3. API responses:

// let userData = {
// name: "Bob",
// email: "bob@example.com",
// phone: null
// };
// console.log(phone);

// output  User hasn't provided phone number

// Real-World Examples
// Example 1: User Login State

// let loggedInUser = null;
// // No one logged in initially
// function login(username) {
// loggedInUser = username;
// }
// function logout() {
// loggedInUser = null;
// //output Explicitly clear the user
// }

// login("Alice");
// console.log(loggedInUser);
// // output"Alice"

// logout();
// console.log(loggedInUser);
// //output null

// Example 2: Optional Form Fields

// let formData={
//     firstname:"John",
//     lastname:"Doe",
//     middleName:null,
// // Optional field - intentionally null
//
//     nickname:undefined
//
//   // Not provided at all
// }
// console.log(formData);

// output {firstname: 'John', lastname: 'Doe', middleName: null, nickname: undefined}firstname: "John"lastname: "Doe"middleName: nullnickname: undefined[[Prototype]]: Object

//Example 3: Database Records

// let product = {
// id: 101,
// name: "Laptop",
// discount: null, // No discount currently
// rating: undefined // No ratings yet
// }
// console.log(product);
//output:{id: 101, name: 'Laptop', discount: null, rating: undefined}discount: nullid: 101name: "Laptop"rating: undefined[[Prototype]]: Object

//  Check for both with loose equality if needed

//  let value = null;
//  if (value == null) { // true for both null AND undefined
// console.log("No value");
// }
// //output:no value

// Always use strict equality (===) to check

// Use null for "intentionally empty"
//  let value=null
// if (value === null) {
//     console.log(value);

//  }

//output: null
//Use undefined for "not yet initialized"

//  let value;

// if (value === undefined) {console.log(value)}

// output: undefined

//Output Methods

// console.log()
// console.log("Hello, World!");

// Multiple Arguments
// console.log("Name:", "Alice");
// console.log("Age:", 25);
// console.log("City:", "New York");

// Output:
// Name: Alice
// Age: 25
// City: New York

// Printing Variables

// let name = "Bob";
// let age = 30;
// let isStudent = false;
// console.log(name);
//  //output Bob

// console.log(age);
//  // output 30

// console.log(isStudent);
// //output false

// Combining Text and Variables

// let product = "Laptop";
// let price = 999;
// console.log("Product:", product);
// // output:Product:Laptop

// console.log("Price:", price);
// // output: Price: 999

// // Or combine in one log
// console.log("Product:", product, "Price:", price)
//output:Product: Laptop Price: 999

// Other Console Methods (Preview)
//While console.log() is the most common, there are other useful console methods:

// console.warn("This is warning!")
//output: This is warning!
// Warning message (yellow in console)

// console.error("This is an error");
// Error message (red in console)
//output: This is an error!

// console.info("This is information")
// Info message (default)
//output: This is information

// console.clear();
// Clear the console
//output: Console was cleared

// Template Literals

// Regular string
// let message1 = "Hello, World!";
// console.log(message1);
// //output: Hello, World!
// Template literal

// let message2 = `Hello, World!`;
// console.log(message2);
// //output: Hello, World!

// Both produce the same output
// console.log(message1);
//output: Hello, World!
// console.log(message2);
//output: Hello, World!

// Embedding Variables with ${}-- use ${} to insert variables or expressions into a string:

// let name = "Alice";
// let age = 25;
// console.log(name);
// //output: Alice
// console.log(age)
// //output: 25

// Old way (concatenation)
// let message1 = "My name is " + name + " and I am " + age + " years old.";
// // console.log(message1);
// //output: My name is Alice and I am 25 years old.

// // // New way (template literal)

// let message2 = `My name is ${name} and I am ${age} years old.`;
// console.log(message1);
// console.log(message2);

//output: My name is Alice and I am 25 years old. My name is Alice and I am 25 years old.

//  Why Template Literals Are Better
// 1. Cleaner Syntax

// Concatenation (messy)
// let product="Laptop";
// let price= 999;
// let message="The"+product+"cost$"+price+"dollars.";
// console.log(message);
// //output: TheLaptopcost$999dollars.

// //Template literal (clean)
// let betterMessage = `The ${product} costs $${price} dollars.`;
// console.log(betterMessage);
// //OUTPUT: The Laptop costs $999 dollars.

//2. Easy Multi-line Strings

//Regular strings (need escape characters)
// let oldWay= "Line 1\nLine 2\nLine 3";
// console.log(oldWay)
// //output: Line 1
// Line 2
// Line 3

// Template literals (natural multi-line)
// let newWay=` Line 1
// Line 2
// Line 3`
// console.log(newWay)
// //output: Line 1
// Line 2
// Line

// example 2: Shopping Cart

// let item = "Apples";
// let quantity = 5;
// let price = 2.5;
// let total = quantity * price;
// let receipt = `
// Item: ${item}
// Quantity: ${quantity}
// Price per unit: $${price}
// Total: $${total}
// `;
// console.log(receipt);
// // Output:
// Item: Apples
// Quantity: 5
// Price per unit: $2.5
// Total: $12.5

// example 3: HTML Generation

// let title = "Welcome";
// let content = "Hello, World!";
// let html = `
// <div class="card">
// <h1>${title}</h1>
// <p>${content}</p>
// </div>
// `;
// console.log(html);

//output: <div class="card">
// {/* <h1>Welcome</h1> */}
// {/* <p>Hello, World!</p> */}
// </div>

// Advanced Features
// Expressions and Function Calls
// function getFullName(first, last) {
// return `${first} ${last}`;
// }
// let firstName="Jhon"
// let lastName="Doe"
// let age=30;
// let message =`${getFullName(firstName ,lastName)} is ${age} years old.`;

// console.log(message);
//output: Jhon Doe is 30 years old.

// Conditional Logic

// let temperature = 30;
// let weather = `It's ${temperature > 25 ? 'hot' : 'cool'} today!`;
// console.log(weather);
//output:  It's hot today!

// let age = 20;
// let status = `You are ${age >= 18 ? 'an adult' : 'a minor'}.`;
// console.log(status);
// //output:  You are an adult.

// Comparison Operators

// The Six Main Comparison Operators

// 1. Greater Than ( > )
// Checks if the left value is greater than the right value.
// console.log(10>5);
// //output: true
// console.log(5>10);
// //output: false
// console.log(5>5);
// //output: false
// let age=20;
// console.log(age>18);
// //output:true

// 2. Less Than ( < )
//Checks if the left value is less than the right value.

// console.log(5 < 10);
// //output: true
// console.log(10 < 5);
//  //output:false
// console.log(5 < 5);
//  //output:false
// let score = 45;
// console.log(score < 50);
// //output: true

// 3. Greater Than or Equal To ( >= )
//Checks if the left value is greater than OR equal to the right value.

// console.log(10 >= 5);
// // /output:true (10 is greater)
//  console.log(5 >= 10);
//  // output false
// console.log(5 >= 5);
// ////output: true (equal counts!)
// let age = 18;
// console.log(age >= 18);
// ////output: true (can vote)

// 4. Less Than or Equal To ( <= )

// console.log(5 <= 10);
// ////output: true
// console.log(10 <= 5);
// ////output: false
// console.log(5 <= 5);
// ////output: true
// let temperature = 25;
// console.log(temperature <= 30);
// ////output: true
// 5. Not Equal To ( != )

// console.log(5 != 4);
// ////output: true
// console.log(5 != 5);
// ////output: false
// console.log(5 !="5");
// ////output: false (converts string to number)
// let userInput = 10;
// console.log(userInput != 0);
// ////output: true

// 6. Loose Equality ( == )
// Checks if two values are equal (converts types if needed).
// console.log(5 == 5);
// //output: true
// console.log(5 == "5");
// //output: true (string converted to number)
// console.log(1 == true);
// //output: true (boolean converted to number)
// console.log(0 == false);
// //output: true
// let x = 10;
// let y = "10";
// console.log(x == y);
// //output: true (type conversion happens)
// Practical Examples
// Example 1: Age Verification

// let age = 17;
// if (age >= 18) {
// console.log("You can vote");
// } else {
// console.log("You cannot vote yet");
// }
// // Output: You cannot vote yet

// Example 3: Password Length

// let password = "abc123";
// let minLength = 8;
// if (password.length >= minLength) {
// console.log("Password is strong enough");
// } else {
// console.log("Password is too short");
// }
// // Output: Password is too short

// Loose vs Strict Equality

// Loose Equality ( == )
// Loose equality compares values but performs type conversion if the types are different.

// Same types - straightforward comparison
// console.log(5 == 5); // true
// console.log("hi" == "hi"); // true
// // Different types - converts before comparing
// console.log(5 == "5"); // true (string "5" converted to number 5)
// console.log(1 == true); // true (true converted to 1)
// console.log(0 == false); // true (false converted to 0)
// console.log("" == false); // true (both are "falsy")

// Strict Equality ( === )
// Strict equality compares both value AND type without any conversion. If the types are different, it immediately
// returns false .
