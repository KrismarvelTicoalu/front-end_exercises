// const warna = ["merah", "kuning", "kelabu"];

// Error
// warna = ["hijau", "abu", "biru"];

// var tidak mengenal block scope (salah satu kelemahan)
// let x = 1;

// if (x === 1)
// {
//     let y = 2;
// }

// console.log(y);

// String Literal
// let fullName = "John Doe";
// let age= 33;
// let address = "Manado";

// Halo nama saya John Doe, umur saya 33 tahun
// dan saya tinggal manado

// String literal in ES5 vs ES6
// let kalimat5 = "Halo nama saya " + fullName + ", umur saya " + age + " tahun dan saya tinggal di " + address;

// let kalimat6 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;

// console.log(kalimat5);
// console.log(kalimat6);

//Arrow Function
//===============

// cara sebelumnya
// function sayGreetings5() {
//     return `Hello World`;
// }
// console.log(sayGreetings5());

// cara baru
// const sayGreetings6 = (name, age, fullName) => {
//     return `Hello ${name}`;
// }
// console.log(sayGreetings6(`avel`, 17, `Ticoalu`));

//Implicit return value
// const sayGreetings6 = (name) => `Hello ${name}`;

// console.log(sayGreetings6("Avel"));

// Pada IIFE
// (
//      () => {
//         console.log("Hello");
//     }
// )();
// let output1 = (() => `Hello`)();
// console.log(output1);

// Pada Callback
// const numbers = [1,2,3,4,5];
// let output2 = numbers.map((item) => item);
// console.log(output2);

// Default Parameter
//-------------------

const sayGreetings5 = (fullName) => {
    if (fullName === undefined)
    {
        console.log(`Hello John Doe`);

    }
    else
    {
        console.log(`Hello ${fullName}`);
    }
};

const sayGreetings6 = (fullName = "John Doe") => {
    console.log(`Hello ${fullName}`);
}

sayGreetings5(`Avel`);

