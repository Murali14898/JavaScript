let gameName = "SpiderNam";
gameName = "batman";

console.log(gameName);

const username = "SpiderNam";
// username = "batman"; // This will throw an error 
// because username is a constant and 
// cannot be reassigned.

console.log(username);

//Difference between var, let and const
// var is function scoped, while let and const are block scoped.
// var can be redeclared and updated, 
// while let can be updated but not redeclared, 
// and const cannot be updated or redeclared.

var x = 10;
var x = 20; // Redeclaration is allowed
x = 30; // Update is allowed

let y = 10;