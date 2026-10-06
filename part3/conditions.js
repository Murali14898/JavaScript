//chacek if a number is greater than another number

let num1 = 5
let num2 = 8

if(num1 > num2){
    console.log("num1 is greater")
}
else{
    console.log("num2 is greater")
}

//Checking if a string is equal to another string

let username = "Murali"
let username1 = "Murali"
if(username == username1){
    console.log("Both are equal")
} // They are equal only

// Checking a variable is Number or not

let score = 44;

if(typeof score === 'number'){
    console.log("Yes it is a number type")
}

//check array is empty or not

let items =[];
if(items.length == 0){
    console.log("yes the array is empty")
}
else if(items.length ==1){
    console.log("Array having one element")
}
else{
    console.log("Array having more thgan one element")
}