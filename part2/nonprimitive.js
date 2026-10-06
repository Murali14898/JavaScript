//object

let obj = []
console.log(typeof obj)

let username = {
    firstname : "Murali" ,
    isLoggedin : true 
};

console.log(username.firstname) // Murali

username.firstname = "Mohan"

console.log(username.firstname) // Mohan

/*Even if the type is const username you can 
change the firstname because you cann't 
point username to another object but 
internal variable can be changed */

username.lastname = "samal"
console.log(username)

//What is the firstname having space first name
let username1 = {
    "first name" : "Murali"
}
console.log(username1['first name'])


//Date

let today = new Date();
console.log(today)
console.log(today.getDate())

//Array

let names = ["A" , "B" , "C" , true , 23]
// you can put different values

console.log(names[0])

//Type conversion

//1. Implicit type conversion

console.log("1"+1)
console.log(true + 1)

// Number(true) = 1
// Number(false) = 0
//Number("2abc") = NaN (Not a Number)
// Number(null) =0
//Number(undefined) = NaN

console.log( typeof NaN) // Number Strange