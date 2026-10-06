//Number

let balance = 120; //type number
let anotherBalance = new Number(123); //type object

console.log(typeof(balance))
console.log(typeof balance)

console.log(anotherBalance)
console.log(typeof anotherBalance)
console.log(anotherBalance.valueOf())


//boolean

let isActive = true;
let isReallyActive = new Boolean(true);//not recomended

//null and undefined

let firstname;
console.log(firstname) // Undefined

/*If you comment oput let firstname then the 
 console.log will print error that is not 
defined which is not same as Undefined */

let secondname = null;
console.log(secondname)

//string

let myString = "Hello"
let myString1 = 'Hi Ram'

let username = "Murali"
let oldgreet = "Hello " + username // You have to add a space in old greet message
console.log(oldgreet)

let newGreet = `Hello ${username} !` // This is called string interpoletion
console.log(newGreet)

let demo1 = `Value is ${2*2}`
console.log(demo1)

//Symbol

/*
It Unique value to the page.
It provide uniqueness.
*/

let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1 == sm2) // False

// Even if the value of Symbol is same they are not equal

let sm3 = Symbol("Murali");
let sm4 = Symbol("murali")

console.log(sm3 == sm4)

