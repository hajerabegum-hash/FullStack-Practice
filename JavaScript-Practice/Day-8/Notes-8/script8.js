//JavaScript Day 8: Modern JavaScript Features

// 1. The this Keyword

// What is this ?

// In JavaScript, this is a special keyword that refers to the object that is currently executing the code. Think of it
// like the word "My" in conversation - its meaning changes based on who is speaking.

// Real-World Analogy:

// When I say "My house", it refers to my house
// When You say "My house", it refers to your house
// The word "My" stays the same, but what it refers to changes based on the context

// How this Works in Objects

// When you use this inside an object's method, it refers to the object itself.

// Example 1: Student Object
// const student1 = {
//   name: "Alex",
//   eng: 22,
//   math: 33,
//   phy: 45,
//   getAvg() {
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(`${this.name} got avg marks=${avg}`);
//   },
// };
// student1.getAvg();
// //another example
// const student = {
//   name: "Alex",
//   eng: 95,
//   math: 93,
//   phy: 97,
//   getAvg() {
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(`${this.name} got avg marks = ${avg}`);
//   },
// };
// student.getAvg();

//Example 2: Bank Account

// const account = {
//   holder: "sarah",
//   balance: 5000,
//   deposite(amount) {
//     this.balance += amount;
//     console.log(
//       `${this.holder} deposite$ ${amount}. New balance $ ${this.balance}`,
//     );
//   },
// };
// account.deposite(500);
//output:Sarah deposited $500. New balance: $5500

//Example 3: Shopping Cart

 //const cart= { 
//items: ["Apple", "Banana"],
//total:2, 
//addItem(item) { 
//this.items.push(item);
//this.total = this.items.length;
//console.log(Added${ ${item}. Total items: ${this.total}`);
//}
//};


// output: Added Orange. Total items: 3


/* 2. Exception Handling: try & catch

Why Handle Errors?

Errors are inevitable in programming. Without proper handling, a single error can crash your entire program.
The try-catch statement lets you handle errors gracefully.*/
