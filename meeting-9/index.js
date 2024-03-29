// Rest and Spread Operator

// Tanpa rest parameter
// const penjumlahanArray = (a, b, c, d, e) => {
//     const array = [a, b, c, d, e];
//     let total = 0;
//     array.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };

// penjumlahanArray(1, 2, 3, 4, 5);

// Dengan rest parameter
// const penjumlahanArray = (a, b, c, ...params) => {
//     let total = 0;
//     params.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };

// penjumlahanArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Spread Operator

// const array1 = [1, 2, 3, 4, 5];

// console.log(...array);

// // 1. Duplikasi Array
// let array2 = array1;
// array1.push(6);
// console.log(`Array1 = ${array1}, Array2 = ${array2}`); // salah

// let array2 = [...array1];
// array1.push(6);
// console.log(`Array1 = ${array1}, Array2 = ${array2}`);

// 2. Menggabungkan array

// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];
// const array3 = [8, 9, 10];

// const combineArray = array1.concat(4, array2, array3);
// console.log(combineArray);

// const combineArray6 = [...array1, 4, ...array2, ...array3];
// console.log(combineArray6);

// Pada object
let john = {
    fullName: "John Doe",
    age: 30,
    address: "Manado"
};

john = {
    ...john,
    job: "teacher"
}
// console.log(john);

let peter = {
    name: "peter",
    umur: 35,
};

const students = {...john, ...peter};
console.log(students);