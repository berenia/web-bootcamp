
/**
 * This is a multi-line comment method
 * This is to output a code on a web page
 */
// document.write("Hello world from Moon");
// alert("Hello James");
// console.log("Hello mark");
// console.log("I love seeing this");

// variable declaration
var age = 0;
let studentName = "John Doe";
let weight = 5.56;
let onlineStatus = true; 
// variable declaration and initialization
const studentPosition = 1;

/**
 * Data type
 * 
 */

// int  // integer - a whole number which could be either negative or positive number 
// float // decimal number 1.645874
// double // higher precision for float data type 1.56465416384168341865
// char // in single character - 'a' 'h'  '@' '2'
// String // a string of character - "John", "Jone Mark"
// Byte //
// Boolean // true 1 or false 0
// Object // {key: value}, {studentName: "Mark James", age: 56}
// Array // [1, 2, 5, 6, 8] - ["james", "mark", "Joy"]
 
// let userRespond = prompt("Whats your name", "full name");
let userResponse2 = confirm("Do you want to proceed to the next stage");
console.log('varable data type: ', typeof userResponse2);

if(userResponse2){
    document.write("Thanks for your response");
}
else {
    document.write("Oops! You can not proceed to the next stage")
}

// how to denote a string in your code 
let resp = `
    <h2 style="color: Blue"> This is to display user response </h2>

    <q style="background: #ffeeaa; color: black; padding: 20px "> ${userResponse2} </q>
`;
document.write(resp);

