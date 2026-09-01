// JavaScript Day  - Revision Notes
// REPL

// Example

// try this console:
1 + 2;

// console.log(1 + 2);
// // output:3

// 5 * 10;
// console.log(5 * 10);
// // output:50

// "Hello" + "World";
// console.log("Hello" + "World");
// // output:"HelloWorld"

// // variables in js

// // creating variables in javascript

// let age = 12;
// console.log(age);
// // output:12

// let name = "Tony Stark";
// console.log(name);
// //  output:Tony Stark

// let isStudent = true;
// console.log(isStudent);
// // output: true

// // you can also declare without assigning (value will be undefined)

// let score;
// console.log(score);
// // Output: undefined

// // let assign value
// score = 95;
// console.log(score);
// // Output:95;

// //  Assignment Operator (=)

// let x = 10;
// console.log(x);
// // output:10;

// // Variable Names - Best Practices

// let studentAge = 25;
// console.log(studentAge);
// // output:25;

// let _;
// console.log(_);
// // output:undefined

// // let _
// // console.log(_)
// // let _
// // console.log(_)
// // let _
// // console.log(_)

// // Data Types

// 1.Number
// Represents numeric values, both integers and decimals.
// let age = 23; //integer
// // console.log(age);
// // output:23

// let price = 99.99; // Decimal (floating-point)
// console.log(price);
// // // output:99.99;

// let temperature = -15; // Negative number
// console.log(temperature);
// // output:-15;

// let distance = 1.5e6; // Scientific notation (1,500,000)
// console.log(distance);
// // output:1500000;

// // 2. String

// let name= "Tony Stark"; // Double quotes
// console.log(name);
// //output:Tony Stark;

// let greeting = 'Hello World '; // Single quotes
// console.log(greeting);
// // output:Hello World;

// let message = `Welcome, ${name}`; // Template literals (backticks)
// console.log(message);
// // output:Welcome, Tony Stark;

// // Template literals allow embedded expressions
// // let age=23;
// // console.log(age)
// // output;23;

// let info = `I am ${age} years old`
// console.log(info)
// ; // Output: "I am 23 years old"

// 3. Boolean (Represents logical values - only two possibilities: true or false .)
// let isStudent = true;
// console.log(isStudent)
// // output:true;

// let isLoggedIn = false;
// console.log(isLoggedIn);
// // output:false;

// let hasPermission = true;
// console.log(hasPermission);
// // Often used in conditions
// if (isStudent) {
// console.log("Student discount applied!");
// }
// // output:Student discount applied!

// if (isLoggedIn) {
// console.log("Student discount applied!");
// }
// // output:(             )

// // it will applied is "true"

// // 4 . Undefined

// let score;
// console.log(score);
// // Output: undefined

// console.log(typeof score);
// // Output: undefined

// // This is different from not declaring a variable at all
// console.log(randomVar);
// // Error: randomVar is not defined

// 5. Null

// let data = null;
// Explicitly saying "this has no value right now"
// let data = null;
// console.log(data);
// output:null;

// Common use case

// let user = null; // No user logged in yet
// // Later, when user logs in
// user = { name: "Alice", id: 101 };

// 6. BigInt

// let bigNumber = 9007199254740991n; // Note the 'n' at the end
// console.log(bigNumber)
// // output:9007199254740991n

// let huge = 12345678901234567890n;
// console.log(huge);
// // output:12345678901234567890n;

// //7. Symbol
// // Creates unique identifiers. Advanced concept - we'll cover later.

// let id1 = Symbol('id');
// console.log(id1)
// // output:Symbol(id)

// let id2 = Symbol('id');
// console.log(id2)
// // output:Symbol(id)

// // Checking Data Types
// // Use the typeof operator:
// console.log(typeof 25); // "number"
// console.log(typeof "hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (this is a JavaScript quirk!)
// console.log(typeof 123n); // "bigint"
// Arithmetic OperationsJavaScript provides standard mathematical operators to perform calculations.

// 1. Addition (+)

// let sum = 5 + 3;
// console.log(sum)
//     // output:8;

//     let result = 10 + 20 + 5;
//     console.log(result)
// output:35;

//     // 2. Subtraction (-)

//     let difference = 10- 3;
//     console.log(difference)
//     // output:7

// let result = 50 - 25;
// console.log(result)

// // output:25;

// // 3. Multiplication (*)

// let product = 4 * 5;
// console.log(product)
// // output:20;

// let area = 10 * 20;
// console.log(area);
// // output:200;

// //4. Division (/)

//  let quotient =20/ 4;
// Console.log(quotient);
// // output:5;

// let half =10 / 2;
// Console.log(half);
// //output:5;

// let decimal = 7/2;
// Console.log(decimal);
// // output3.5;

// //5. Modulo (%)

// //Returns the remainder of a division.
// let remainder = 12 /5 ;
// Console.log(remainder);
// // output:2 (12 ÷ 5 = 2 remainder 2)

// let check = 10% 3;
// Console.log(check);
// // output:1 (10 ÷ 3 = 3 remainder 1)

// let even = 8 % 2;
// Console.log(even);
// // output 0 (no remainder - 8 is even)

// // Practical use: Check if a number is even or odd
// let number = 7 ;
// if (number % 2 === 0)
// {
// console.log("Even");
// }
// else {
// console.log( "Odd");
// // This will execute
// }

// // 6. Exponentiation (**)

// //Raises a number to a power.
// let squared = 5 *2 ;
// Console.log(squared);
// // output:25 (5 squared);

// let cubed = 2 ** 3 ;
// Console.log(cubed);
// // output:8 (2 cubed);

// let power = 10 **3;
// Console.log(power);
// // output:1000 ;(10 to the power of 3)

// //Combining Operations
//  let result = 5 + 3 * 2 ;
// Console.log(result);
// // output:11 (not 16!)

// //// Multiplication happens first (operator precedence)
// let complex =  (5 + 3) * 2 ;
// Console.log(complex);
// // output:16;

// // Parentheses force addition first
// //String Concatenation with +
// let firstName  = "Tony";
// Console.log(firstname)
// //output:Tony;

// let lastName= "Stark";
// Console.log(lastname);
// //output:Stark;

// let  fullName = firstName+ " " + lastName ;
// Console.log(fullName);
// // Output:"Tony Stark"

// let age= 23;
// Console.log(age);
// //output:23

// let message =  "I am " +age+" years old";
// Console.log(message);
// // output:"I am 23 years old";

// //NaN (Not-a-Number)
// //is a special value in JavaScript that represents an invalid or undefined numerical result.

// // Dividing zero by zero

// let result1 = 0 / 0;
// Console.log(result1)
// // output: NaN;

// // Invalid mathematical operations
// let result2 = Math.sqrt(-1);
// Console.log(result2);
// // output: NaN (square root of negative)

// // Converting non-numeric strings to numbers
// let result3= Number ("abc") ;
// Console.log(result3);
// // output: NaN

// let result4 = parseInt("hello");
// Console.log(result4);
// // output:NaN;

// // Operations with undefined

// let x;
// let result5 = x * 5;
// Console.log(result5)
// // output:NaN;

// //1. NaN Propagates

// //Any operation involving NaN results in NaN :
// // let x = NaN;
// console.log( x+ 1 );
// // output: NaN;

// console.log (x *5);
// // output:NaN

// console.log(x / 2 );
// // output:NaN;

// console.log( x -10);
// // output:NaN ;

// //2. Type of NaN is "number"

// console.log(typeof NaN);
// // output:”number";

// // This is a quirk of JavaScript!

// //3. NaN is Not Equal to Itself

// console.log(NaN === NaN);
//  // output: false

// console.log(NaN ==NaN);
//  // output:false;

// // To check if a value is NaN, use:
// console.log(isNaN(NaN) );
// // output:true;

// console.log(Number.isNaN(NaN) );
// //output: true (more reliable)

// //Checking for NaN

//  let value= 0 / 0;
// console.log(isNaN(value));
// // output:true;

// // Method 2: Number.isNaN() - doesn't convert (recommended)
// console.log(Number.isNaN(value )) ;
// // output:true;

// // Why Number.isNaN() is better:

// console.log(isNaN ("hello") );
//  // output:true (converts "hello" to number first)

// console.log(Number.isNaN ("hello") );
// //output: false (doesn't convert)

// //Operator Precedence

// //When an expression has multiple operators, JavaScript follows a specific order of evaluation, similar to
// // BODMAS/PEMDAS in mathematics.

// // Order of Precedence (Highest to Lowest)
// // 1. Parentheses ()
// // 2. Exponentiation **
// // 3. Multiplication *,Division / , Modulo %
// // 4. Addition + , Subtraction -
// //Examples

// //// Example 1: Multiplication before addition
// // let result1 = 5 +3 * 2;
// // Step 1: 3 * 2 = 6
// // Step 2: 5 + 6 = 11
// console.log(result1);
// // output: 11

// //  Example 2: Using parentheses to change order
// // let result2 = ( 5+ 3) *  2;
// // Step 1: (5 + 3) = 8
// // Step 2: 8 * 2 = 16
// console.log(result2);
// // output:16;

//  // Example 3: Complex expression
// // let result3 = ( 5 + 2)/ 7 +1 *2;
// // Step 1: (5 + 2) = 7
// // Step 2: 7 / 7 = 1
// // Step 3: 1 * 2 = 2
// // Step 4: 1 + 2 = 3
// console.log(result3);
// // output:3

// // Example 4: Exponentiation has high precedence
// // let result4 = 2 + 3 ** 2;
// // Step 1: 3 ** 2 = 9
// // Step 2: 2 + 9 = 11
// console.log(result4);
// // output:11

// // Example 5: Same precedence, left to right
// // let result5 =10 / 2 *  3 ;
// // Step 1: 10 / 2 = 5 (left to right)
// // Step 2: 5 * 3 = 15
// console.log(result5 );
// // output:15

// //Key Rules

// //1.Use parentheses when in doubt - they make code clearer
// //Same precedence operators evaluate left to right

// //3. Exponentiation is right-to-left: 2 ** 3 ** 2 = 2 ** (3 ** 2) = 2 ** 9 = 512
// //pro-tip(When writing complex expressions, use parentheses liberally to make your intentions clear, even if they're not
// // technically required:)

//  // Less clear

// let total= price +price * taxRate;

// // More clear

// // let total=price+ (price* taxRate);

// //Assignment Operators

// //Assignment operators provide shorthand ways to update variable values.

// //Basic Assignment (=)

// // let x = 10 ;
// // output Assigns 10 to x

// //Compound Assignment Operators

// //Addition Assignment (+=)
// //  let age=20 ;
// age += 5;
// // Same as: age = age + 5
// console.log(age);
// //output:25;

// // Equivalent to:
// let score =100 ;
// score = score +50 ;
// Console.log(score)
// // output: 150

// // vs.

// score +=50;
// // output:150 (shorter!);

// //Subtraction Assignment (-=)
// let balance =1000 ;
// balance -= 200 ;

// // Same as: balance = balance - 200
// console.log(balance);
// // output:800;

// //Multiplication Assignment (*=)

// let price =50 ;
// price *= 2 ;

// // Same as: price = price*2
// console.log(price);
// // output:100;

// //Division Assignment (/=)

// let total =100;
// total /= 4;
// // Same as: total = total / 4
// console.log(total);
// // output: 25;

// //Modulo Assignment (%=)

// let number =17 ;
// number %= 5 ; // Same as: number = number % 5
// console.log(number);
// // output:2;

// //Exponentiation Assignment (**=)
// let base= 2 ;
//  base **= 3; // Same as: base = base ** 3
// console.log(base);
// // output:8;

// //When to Use

// //These operators make code more concise and readable, especially in loops and calculations:// Accumulating a total

// let total = 0 ;
// total += 100 ;
// Console.log(total)

// // Add first item
// //output:100

// total += 250 ;
// Console.log(total)
// // Add second item
// //output:350;

// total +=75 ;
// Console.log(total)
// // Add third item
// // output:425

// // Doubling a value multiple times

// let value = 5 ;
// value *= 2 ;
// Console.log(value)
// // output:10

// value *= 2 ;
// Console.log(value)
// // output:20 ;

// value *= 2 ;
// Console.log(value)
// //output: 40;

// //Unary Operators

// //Unary operators work with a single operand (unlike binary operators like + or - which need two operands).

// //Increment Operator (++)

// //Increases a value by 1.

// //Post-increment (variable++)
// //Uses the current value first, then increments.

// let count = 5 ;
// let result = count++ ;
// console.log(result) ;
// // output: 5 (uses old value)

// console.log(count) ;
// //output: 6 (now incremented);

// // Step by step:
// // 1. result = count (result gets 5)
// // 2. count = count + 1 (count becomes 6)
// //Pre-increment (++variable)
// //Increments first, then uses the new value.
//  let count =5 ;
// let result = ++ count ;
// console.log (result) ;
// // output: 6 (uses new value);

// console.log(count) ;
// // output: 6 (incremented);

//  // Step by step:
// // 1. count + 1 (count becomes 6)
// // 2. result = count (result gets 6)

// //Comparison Example
// let x =10 ;
// let a = x ++ ;

// // Post-increment
// console.log(a);
// // output:10 (old value);

// console.log(x) ;
// // output:11 (incremented)

// let y = 10 ;
// let b = ++y ;
// // Pre-increment
// console.log(b) ;
// // output:11 (new value)

// console.log(y) ;
// // output:11 (incremented)

// //Decrement Operator (--)

// //Decreases a value by 1. Works the same way as increment.

// //Post-decrement (variable--)

// let score= 10 ;
// let result = score-- ;
// console.log(result) ;
// // output:10 (old value)

// console.log(score) ;
// // output: 9 (decremented)

// //Pre-decrement (--variable)
// let score = 10 ;
// let result  = - - score ;
// console.log(result) ;
// // output:9 (new value) ;

// console.log( score) ;
// // output: 9 (decremented)

// //Practical Example: The Tricky Case
// let num = 5 ;
// let newNum = num ++;
// num = 6
// Console.log ( newNum)
// // output:newNum = 5,

// Console.log( num)
// // output:num = 6

// newNum = ++ num;
// // output num = 7, newNum = 7

// console.log(num);
// // output: 7

// console.log(newNum) ;
// // output:7

// // Step by step:
// // Line 2: newNum gets 5 (post-increment), then num becomes 6,
// // Line 3: num becomes 7 (pre-increment), then newNum gets 7,
// //Common Use Cases

// //1. Loop Counters

// let i = 0 ;
// while(i< 5){
// console.log(ii);
// i ++;
// // output:Increment after each iteration

// }

// //2. Counting Down

// let countdown = 10;
// while (countdown > 0)
// {
// console.log(countdown) ;
// countdown - ;
// // output: Decrement
// }

// console.log("Blast off!");

// //3. Simple Incrementing
// let pageViews =100 ;
// pageViews++ ;
// // output: Now 101;

// //Pro Tips

// //1. Avoid confusion: Don't use increment/decrement in complex expressions
//  // Bad (confusing)

//  let x = 5 ;
// let y = x++ + ++ x ;
// // Hard to read!

// Console.log(y)
// //output:12

// // Good (clear)
// let x = 5 ;
// Console.log(x)

// //output:7;

// x ++ ;
// x ++ ;
// let y = x + x ;
// Console.log(y);
// //output:14;

// //2. Use standalone: Best used on their own line for clarity

// // Preferred

// let count= 10 ;
// count ++;
// console.log(count) ;
// //output:11;

// // Avoid (unless you have a good reason)
// let result  = count ++ + ++count
// Console.log(result)
// //output:24(count++ (Post-increment):

// // It returns the current value of count before incrementing.
// // Value used in the math equation = 11.
// // After this evaluation, count increments in the background and becomes

// //  12. [1]
// //+ (Addition): Links the two parts of the equation.
// // ++count (Pre-increment):
// // It increments count before returning its value.
// // count goes from 12 to 13.

// // Value used in the math equation = 13. [1]
// // Final Math:

// //  \(\text{result}=11+13=24\)
// // )//

// //Quick Reference Card

//  // Variables
// let  age =23;
// const PI =  3.14;

// // Data Types
// typeof 42
// output: "number"

// typeof "hello"
// //output: "string"

// typeof true
// // output:"boolean"

// typeof undefined
// //output:  "undefined"

// typeof null
// //output: "object" (quirk)

// // Arithmetic
// 10+ 5
// //output: 15

// 10- 5
// //output:5

// 10 * 5
// //output:50

// 10 / 5
// //output:2

// 10 % 3
// //output:1

// 2 ** 3
// //output: 8

// // Assignment
// x += 5
// //output:x = x+5

// X -= 5
// //output:x=x-5

// X *= 5
// //output:x=x*5

// X/= 5
// //output:x=x/5

// // Increment/Decrement
//  x++  //
// output: x = x + 1 (post)
// ++x
// //output: x = x + 1 (pre)

// X - -
// //output: x = x - 1 (post)
m;
// - x
// output:// x = x - 1 (pre)

// // Checking for NaN
// isNaN (value)
// //output: true if NaN
// Number.isNaN(value)
// //better method
