// Introduction to Arrays
// An array is a data structure that stores an ordered collection of values. Arrays can hold multiple items of any
// data type.
// Syntax: let arrayName = [item1, item2, item3];
// Example 1: Finding a character
// let str ="Hello World";
// console.log(str)
// //output: Hello World
// console.log(str.indexOf("W"));
// //output 6

// console.log(str.indexOf("o"));
// //output 4 (first occurrence)

// Example 1: Creating a simple array

// let colors = ["red", "green", "blue"];
// console.log(colors);

//output ["red", "green", "blue"]

// Example 2: Accessing array elements (0-indexed)

// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[0]);
// // //output: "apple"

// console.log(fruits[2]);
// //  //output: "mango"

// // Example 3: Arrays with different data types

// let mixed = ["hello", 42, true, 3.14];
// console.log(mixed[1]);
// //output:  42
// console.log(mixed[3]);
// //output:  3.14

// Example 4: Array length property

// let numbers = [10, 20, 30, 40];
// console.log(numbers.length);
// // output: 4

// // // Example 5: Accessing last element

// let items = ["first", "second", "third", "fourth"];
// let lastIndex = items.length - 1;
// console.log(items[lastIndex]);
// //output: "fourth"

// 10. Arrays are Mutable
// Unlike strings, arrays are mutable, meaning you can change their contents directly. You can modify, add, or
// remove elements from the original array.

// Example 1: Changing an element

// let fruits = ["mango", "apple", "litchi"];
// fruits[0] = "banana";
// console.log(fruits);
//output: ["banana", "apple", "litchi"]

// Example 2: Modifying multiple elements

// let numbers = [1, 2, 3, 4];
// numbers[0] = 10;
// numbers[3] = 40;
// console.log(numbers);
//output: [10, 2, 3, 40]

// Example 3: Changing last element

// let colors = ["red", "green", "blue"];
// colors[colors.length -1] = "yellow";
// console.log(colors);

// output:["red", "green", "yellow"]

// Example 4: Arrays vs Strings mutability

// let arr = ["a", "b", "c"];
// arr[0] = "z";

// // Works!

// console.log(arr);
// //output: ["z", "b", "c"]

// let str = "abc";
// str[0] = "z";
// // Doesn't work original string can't modify

// console.log(str);
//output: "abc" (unchanged)

// Example 5: Updating based on condition
// let scores = [85, 90, 75, 88];
// if (scores[2] < 80) {
// scores[2] = 80;
// // Bump up the low score
// }
// console.log(scores);
//output: [85, 90, 80, 88]

// 11.Basic Array Methods (End/Start)

// Example 1: Using push() to add to end

// let fruits = ["apple", "banana"];
// fruits.push("mango");
// console.log(fruits);
// //output: ["apple", "banana", "mango"]

// // Example 2: Using pop() to remove from end
// let colors = ["red", "green", "blue"];
// let removed = colors.pop();
// console.log(removed);
// // output:"blue"
// console.log(colors);
// //output: ["red", "green"]

// // Example 3: Using unshift() to add to start
// let numbers = [2, 3, 4];
// numbers.unshift(1);
// console.log(numbers);
// //output: [1, 2, 3, 4]

// // Example 4: Using shift() to remove from start
// let items = ["first", "second", "third"];
// let firstItem = items.shift();
// console.log(firstItem);
// //output: "first"
// console.log(items);
// //output: ["second", "third"]

// // Example 5: Combining multiple operations
// let stack = [1, 2, 3];
// stack.push(4);
// //output: [1, 2, 3, 4]
// stack.push(5);
//  //output: [1, 2, 3, 4, 5]
// stack.pop();
// //output: [1, 2, 3, 4]
// stack.unshift(0);
//  //output: [0, 1, 2, 3, 4]
// console.log(stack);
// //output: [0, 1, 2, 3, 4]

// 12. Search and Merge Methods

// Example 1: Using indexOf()
// let fruits=["apple", "banana","mango"]
// console.log(fruits.indexOf( "banana" ))
// //output:1
// console.log(fruits.indexOf( "grapes" ))
// //output:-1

// // Example 2: Using includes()

// let colors=["red", "green","blue"]
// console.log(colors.includes("green"))
// //output:true
// console.log(colors.includes("yellow"))
// //output:false

// Example 3: Using concat()

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let combined=arr1.concat(arr2)
// console.log(combined);
//output:  [1,2,3,4,5,6]

// Example 4: Using reverse()

// let numbers=[1,2,3,4,5]
// numbers.reverse()
//     console.log(numbers);
// //output:[5,4,3,2,1]

// // Example 5: Combining methods

// let items=["a","b", "c"]
// let moreItems=["d","e"]
// let all= items.concat(moreItems)
// console.log(all);
// //output:['a','b','c','d','e']
// console.log(all.includes("c"));
// //output:true
// console.log(all.indexOf("d"));
//output: 3

//13. The .splice() Method  (The .splice() method is a powerful tool that can remove, replace, or add elements at any position in an array. It
// modifies the original array.)

// Example 1: Inserting elements
// let months = ["jan", "march", "April"];
// months.splice(1, 0, "feb");
// console.log(months);
// //output: ['jan', 'feb', 'march', 'April']

// // Example 2: Removing elements

// let colors=["red", "green","blue", "yellow"]
// colors.splice(2,1)
// console.log(colors)
// //output: ['red', 'green', 'yellow']

// Example 3: Replacing elements

// let fruits = ["apple", "banana", "mango"];
// fruits.splice(1, 1, "orange");

// console.log(fruits);
// //output: ["apple", "orange", "mango"]

// Example 4: Removing and adding multiple elements

// let numbers=[1,2,5,6]
// numbers.splice(2, 0, 3,4)
// console.log(numbers);
// //output: [1,2,3,4,5,6]

// // Example 5: Removing multiple elements

// let items=["a","b","c","d","e"]
// items.splice(1,3)
// console.log(items);
// //output:["a", "e"]

// 14. Array References
// When you assign an array to a variable, you're storing a reference (memory address) to that array, not the actual
// values. This means two variables can point to the same array.

// Example 1: Arrays with same values are not equal
// console.log([1,2]==[1,2])
// // output: false

// console.log([1, 2] === [1, 2]);
// //output: false

// Example 2: Copying a reference
// let arr1=[1,2,3]
// let arr2=arr1 //arr2 points to same array as arr1
// arr2[0]=99
// console.log(arr1);
//  //outut [99, 2, 3] (also changed!)
