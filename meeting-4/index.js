//JavaScript Function

// function greetings() {
    //      return "Hello";
    //     }
    
const age = 17; //Global

// const greetings = function (fullName) {
//     //parameter
//     console.log(age);
//     const job = "teacher";
//     if (job === "teacher") {
//         const address = "Manado";
//     }
//     console.log(address);
//     return "Hello";
// }
    
    // Parameter is in function definition while argument is when the function is called

// console.log(job);
//console.log(greetings("John"));

//IIFE (Immediately Invoked Function Expressions) using already defined function
(function hello() {
    console.log("Hello");
})();



//IIFE (Immediately Invoked Function Expressions) using anonymous function

// (
//     function() {
//         console.log("Hello IIFE");
//     }
// )();

//Callback Function

// function createGreetings(name, callback){
//     const greetings = "Hello " + name;
//     callback(greetings);
// }

// function logGreetings(greetings){
//      console.log(greetings);
// }

// callback function using already defined function
// createGreetings("Avel", logGreetings)

// callback function using anonymous function
// createGreetings("Avel", function (greetings) {
//     console.log(greetings);
// });
