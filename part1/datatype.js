/*
Types of datatypes in JavaScript:
1. Primitive datatypes:
   - String
   - Number
   - Boolean
   - Null
   - Undefined
   - Symbol (ES6) - Unquiness
   - BigInt (ES2020)

2. Non-primitive datatypes:
   - Object
     - Array
     - Function
     - Date
     - RegExp
     - etc.     
*/
var score = 100; // Number
// score is the container and 100 is the value stored in it.
//var is the old way to declare a variable, now we use let and const to declare variables.
let score1 = 200; // Number
let name = "John"; // String
let isActive = true;
let isNull = null;
let isUndefined = undefined;
let isSymbol = Symbol("id");
let isBigInt = 1234567890123456789012345678901234567890n; // BigInt

// Non-primitive datatypes
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

let numbers = [1, 2, 3, 4, 5]; // Array
function greet() {
  console.log("Hello");
} // Function
let date = new Date(); // Date
let regex = /ab+c/; // RegExp

//Borrow value from another variable
let score2 = score1;

console.log(score2); 