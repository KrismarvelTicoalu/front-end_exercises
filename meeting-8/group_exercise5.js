// 1. Destructuring
// Array
const months = ["January", "february", "March"];
const [firstMonth, secondMonth, thirdMonth] = months;
console.log(firstMonth)
console.log(secondMonth)
console.log(thirdMonth)

// // Object
// const s_Info = {nama: "Johanson Doe", age: "18", major: "Math"};
// const {nama, age, major} = s_Info;
// console.log(nama)
// console.log(age)
// console.log(major)

// // 2. Destructuring dengan mengambil sebagian item
// // Array
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const [first, second, , , , sixth, seventh] = days;
// console.log(first)
// console.log(second)
// console.log(sixth)
// console.log(seventh);

// // Object
// const w_Info = {w_nama: "Bobby Brown", w_age: "37", fields: "Medicine"};
// const {w_nama, fields} = w_Info;
// console.log(w_nama)
// console.log(fields)

// // 3. Destructuring menggunakan default value
// // Array
// let [greeting = "hello", nama= "John"] = ["Avel"];

// console.log(greeting);
// console.log(nama);

// // Object
// let {nama = "John", country = "USA", occupation = "Developer"} = {nama: "Avel", country: "Indonesia"};

// console.log(nama);
// console.log(country);
// console.log(occupation);

// // 4. Destructuring dengan menggunakan rest operator
// // Array
// let [greeting, ...intro] = ["Hello", "nama", "saya", "Avel"];

// console.log(greeting);
// console.log(intro);

// // Object
// let person = {nama: "Avel", country: "Indonesia", occupation: "Student", brothers: ["Avin", "Aron"]};

// let {nama, country, ...others} = person;

// console.log(nama);
// console.log(country);
// console.log(others);