// Array Exercises
let people = ["Greg", "Mary", "Devon", "James"];

// 1
for (let i = 0; i < people.length; i++)
{
    console.log(people[i]);
}

// 2
people.forEach(function(person){
    console.log(person);
});

// 3
people.shift();

// 4
people.pop();

// 5
people.unshift("Matt");

// 6
people.push("Krismarvel");

// 7
for (let i = 0; i < people.length; i++)
{
    console.log(people[i]);
    
    if (people[i] === "Mary")
    {
        break;
    }
}

// 8
let subPeople = people.slice(2);

// 9
people.splice(2, 1, "Elizabeth", "Artie");

// 10
let withBob = people.concat("Bob");

// Object Exercises
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1
programming.languages.push("Go");

// 2
programming["difficulty"] = 7;

// 3
delete programming.jokes;

// 4
programming.isFun = true;

// 5
programming.languages = programming.languages.map(function(lang, i){
    return i + " - " + lang;
})
console.log(programming.languages);


