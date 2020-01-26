"use strict";
var firstName = "Nate";
var numberStates = 50;
var sum = 5 + 4; // Add 5 and 4, then store the result in the "sum" variable.
function sayHello() {
    alert('Hello World');
}
sayHello(); // Execute "sayHello" function.
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var veggies = ["carrots", "beans", "potatoes"];
for (var _i = 0, veggies_1 = veggies; _i < veggies_1.length; _i++) {
    var i = veggies_1[_i];
    console.log(i);
}
var names = []; // Declare a "names" array.
names = [
    {
        name: "john",
        age: 40
    },
    {
        name: "jane",
        age: 32
    },
    {
        name: "april",
        age: 15
    },
    {
        name: "dude",
        age: 20
    },
    {
        name: "chris",
        age: 8
    }
];
for (var _a = 0, names_1 = names; _a < names_1.length; _a++) { // Use "for of" to get to the values of the keys in each object.
    var i = names_1[_a];
    checkAge(i.name, i.age);
}
function getLength(word) {
    return word.length;
}
var result = getLength("Hello World");
if (result % 2 === 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
