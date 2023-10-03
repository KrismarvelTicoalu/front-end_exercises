//Array
// Monday, 28 August 2023


// Declaring as literal
let students = ["john", "bob", "peter"];
let numbers = [1,2,3,4,5];
let john = ["john", "doe", 35, true];

// console.log(students);
// console.log(numbers);
// console.log(john);
// console.log(john.length);

// Declaring using new keyword
let buah = new Array( 'Mangga', 'Apel', 'Jeruk');

// console.log(buah);

//Array Index
// console.log(students[0]);
// console.log(students[students.length - 1]);

let olahraga = ["Berenang", "Sepak Bola", "Bola Basket"];

// console.log(olahraga);

for (let i = 0; i < 3; i++) {
    // console.log(olahraga[i]);
}

// Array Methods

// //ToString
// console.log(john.toString());

// //Join
// console.log(john.join("#"));

// //Pop
// console.log(olahraga.pop());
// console.log(olahraga);
// console.log(olahraga.pop());
// console.log(olahraga);

// //Push
// olahraga.push("Badminton");
// console.log(olahraga);

// //Shift
// olahraga.shift();
// console.log(olahraga);

// //Unshift
// olahraga.unshift("Ping Pong");
// console.log(olahraga);

// //Splice
// olahraga.splice(1, 0, "Tinju", "Lari");
// console.log(olahraga);

// //Slice
// let pjok = olahraga.slice(2)
// console.log(pjok);
// pjok = olahraga.slice(1, 3);
// console.log(pjok);

// //concat
// let combined = olahraga.concat(pjok);
// console.log(combined);

//Object

const john2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isMarried: true,
    grade: [90, 80, 100],
    address: {
        city: "Manado",
        province: "Sulawesi Utara",
        postalCode: "95371",
    },
    sayGreetings: function () {
        console.log("Hello my name is " + this.firstName);
    }
};

// Accessing object using dot notation
// console.log(john2);
// console.log(john2.grade[2]);
// console.log(john2.address.city);

// Accessing object using bracket notation
// console.log(john2["firstName"]);
// console.log(john2["grade"][2]);
// console.log(john2["address"]["city"]);
// console.log(john2["sayGreetings"]());

//Array Object

//Format json
let students2 = [
    {
        id: 1,
        name: "John",
    },
    {
        id: 2,
        name: "Petter",
    },
    {
        id: 3,
        name: "Jack",
    },
]
// students2.forEach(function (data) {
//     console.log(data);
// });

// let output = students2.map(function (item) {
//     console.log(item);
// })

// let output = students2.filter(function (item) {
//      return item.name == "Petter";
//  });

let output = students2.find(function (item) {
    return item.name == "Petter";
});
 console.log(output);
 




