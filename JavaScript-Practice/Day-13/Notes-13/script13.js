// JavaScript Day 13: Asynchronous JavaScript – Callbacks & Promises
// 1. JavaScript is Single-Threaded
// The Core Concept
// JavaScript has only one call stack. This means it can execute only one piece of code at a time. Think of it as
// having only one worker in a factory - that worker can only do one task at a time, in the exact order tasks are
// given.
// Synchronous Execution (The Default Behavior)
// When JavaScript runs code synchronously, it executes each line one after another, waiting for each line to
// complete before moving to the next.

// console.log("step:1 - starting the program");
// //output : step:1 - starting the program
// console.log("step:2 - doing some work");
// //output: step:2 - doing some work
// console.log("step:3 - finish up");
// //output:step:3 - finish up

// // The Blocking Problem
// // If one line of code takes a long time to execute, everything else stops and waits. This is called blocking.

// console.log("Before Calculations");
// //image this loops takes 5 seconds

// for (let i = 0; i < 5000000000; i++) {}
// console.log("After a Long Calculations");

// // During those 5 seconds, your entire webpage freezes!
// // Users can't click buttons, scroll, or do anything.

// // 2. Synchronous vs. Asynchronous Operations
// // Synchronous Code: Instant Execution
// // Synchronous operations complete immediately. The CPU can handle them quickly without waiting for external
// resources.

// All of these are synchronous (instant)

// let x = 10;
// let y = 20;
// let sum = x + y;
// console.log(sum);
// //output: 30
// let name = "Alice";
// let greeting = "Hello, " + name;
// console.log(greeting);
//output: Hello, Alice

// Asynchronous Code: Operations That Take Time
// Asynchronous operations depend on external factors and take time to complete:
// Reading a file from disk
// Fetching data from a server
// Waiting for user input
// Setting a timer

// console.log("Starting......");
// This is ASYNCHRONOUS - it doesn't block
// setTimeout(() => {
//   console.log("This line appear 2 seconds");
// }, 2000);
// console.log("Ending....");

// Output:
// Starting
// Ending
// (2 seconds pass...)
// This appears after 2 seconds

// Asynchronous (Efficient) Waiter:
// 1. Takes order from Table 1
// 2. Gives order slip to kitchen
// 3. Immediately goes to Table 2 and takes their order
// 4. Goes to Table 3
// 5. When kitchen rings the bell (callback!), brings food to Table 1

// Result: Great service, happy customers!

// 3. I/O Bound vs. CPU Bound Tasks

// CPU Bound Tasks

// These tasks heavily use the processor. The CPU is actively working the entire time.

// CPU Bound - The processor is working hard

// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log("Calculating.......!");
// let result = fibonacci(40);
// console.log("Result", result);
// console.log("Done!");
// // During the calculation, JavaScript is BLOCKED
// Your webpage will freeze

// Examples of CPU Bound tasks:
// Complex mathematical calculations
// Image processing
// Video encoding
// Sorting massive arrays
// Running algorithms

// I/O Bound Tasks

// These tasks wait for input/output operations. The CPU is mostly idle, waiting for something external.

// I/O Bound - Waiting for external resource

// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// console.log("Request sent, but not waiting!");
// JavaScript doesn't freeze while waiting for the server
// It continues executing other code

// 4. setTimeout: Your First Async Function
// How setTimeout Works
// setTimeout schedules a function to run after a specified delay (in milliseconds). JavaScript registers the timer
// and immediately moves on.

// console.log("1. Program Starts!");
// setTimeout(() => {
//   console.log("2. This Runs After 2 Seconds ");
// }, 2000);
// console.log("3. Program continues immediately");

// Output:
// 1. Program starts
// 3. Program continues immediately
// (2 seconds later...)
// 2. This runs after 2 seconds

// Multiple Timers

// console.log("Open CGC Portal");
// setTimeout(() => {
//   console.log("Header loaded");
// }, 1000);
// setTimeout(() => {
//   console.log("Student Data Loaded");
// }, 2000);
// setTimeout(() => {
//   console.log("Footer Loaded");
// }, 500);
// console.log("Portal structure Is Ready");

// Output:
// Open CGC Portal
// Portal structure ready
// Footer loaded (after 0.5s)
// Header loaded (after 1s)
// Student data loaded (after 2s)

//Real Example: Form Submission Simulation

// function submitForm() {
//   console.log("Submitting Form...");
//   setTimeout(() => {
//     console.log("Form Submitted Successfully...!");
//     console.log("Redirected To The Dashboard...!");
//   }, 1500);
//   console.log("Please Wait...!");
// }
// submitForm();

// Output:
// Submitting form...
// Please wait...
// (1.5 seconds later...)
// Form submitted successfully!
// Redirecting to dashboard...

// 5. Callback Functions
// What is a Callback?
// A callback is a function passed as an argument to another function. It gets executed after the main function
// completes its task.

// Simple callback example

// function greet(name, callback) {
//   console.log("Hello!," + name);
//   callback();// Execute the callback
// }
// function sayGoodbye() {
//   console.log("Goodbye!");
// }
// greet("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!

// Callbacks with Asynchronous Operations

// function fetchStudentData(studentId, callback) {
//   console.log("fetching data from studentId:", studentId);
//   // Simulate database delay
//   setTimeout(() => {
//     let studentData = {
//       id: studentId,
//       name: "Rahul Sharma",
//       course: "Computer Science",
//     };
//     console.log("Data Fetched Successfully");
//     callback(studentData); // Pass data to callback
//   }, 2000);
// }
// function displayStudent(data) {
//   console.log("Dispaly Student:");
//   console.log("Name:", data.name);
//   console.log("Course:", data.course);
// }
// fetchStudentData(101, displayStudent);
// Output:
// Fetching data for student ID: 101
// (2 seconds later...)
// Data fetched successfully!
// Displaying student:
// Name: Rahul Sharma
// Course: Computer Science

// function serviceVehicle(carModel, phoneNumber) {
//   console.log("Received", carModel, "for service");
//   console.log("Customer can leave now");
//   setTimeout(() => {
//     console.log("Service complete!");
//     phoneNumber(); // Call the customer back
//   }, 3000);
// }
// function customerCallback() {
//   console.log("📞 Ring ring! Your car is ready!");
//   console.log("Customer returns to pick up car");
// }
// serviceVehicle("Honda City", customerCallback);
// Output:
// Received Honda City for service
// Customer can leave now
// (3 seconds later...)
// Service complete!
// 📞 Ring ring! Your car is ready!
// Customer returns to pick up car

// 6. Callback Hell (The Pyramid of Doom)
// The Problem
// When you need to perform multiple asynchronous operations in sequence, you end up nesting callbacks inside
// callbacks. This creates deeply nested code that's hard to read and maintain.

// Task: Change background color in sequence
// Red (1s) // Red (1s) →→ Orange (1s) Orange (1s) →→ Gr Green (1s) een (1s) →→ Blue (1s) Blue (1s)

function changeColor(color, delay, callback) {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    console.log("Changed to:", color);
    if (callback) callback();
  }, delay);
}

// THE PYRAMID OF DOOM 😱
changeColor("light pink", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("lavender", 1000, () => {
      changeColor("skyblue", 1000, () => {
        console.log("All colors done!");
      });
    });
  });
});
changeColor();
