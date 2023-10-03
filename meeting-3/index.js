//Variabel
// let & const

// 1. Declaring variables

// camelcase and English recommended
let firstName;
// firstName = "John Doe"; //String

// let age = 30; //Number
// let grade = 90.8; //Number

// // it is advised to prefix variable name with is or maybe are when declaring boolean variable
// let isActive = false // Boolean

// // let variable can be changed
// age = "Tiga Puluh"; // from integer to string

// // const variable
// const gender = "male";

// // print variables
// console.log(firstName);
// console.log(age);
// console.log(grade);
// console.log(isActive);
// console.log(gender);

// // 2. Operators

// //  Arithmetic (Numbers) operators
// let num1 = 5;
// let num2 = 2;

// num2++;

// console.log(num1 ** num2);

// Arithmetic (String) operators
firstName = "John";
let lastName = "Doe";

// console.log("halo nama saya " + firstName + " " + lastName);
// console.log(firstName += lastName);

// Relational operators
let num1 = "5";
let num2 = 5;

// using == (loose equality) it only checks the value
// console.log(num1 == num2);

// using === (strict equality) it checks the value and the data type
// console.log(num1 === num2);

// the same also for != (checks only value) and !== (checks the value and data type)

// Ternary Operators
let age = 15;
let isEligible = age >= 17 ? true : false;

// console.log(isEligible);

// 3. Functions

function greetings(fullName){
    return "Hello " + fullName;
}

greet = greetings("Avel Ticoalu");
console.log(greet);