let firstName = "Nate";
const numberStates = 50;
let sum = 5 + 4; // Add 5 and 4, then store the result in the "sum" variable.

function sayHello() {
  alert('Hello World');
}

sayHello(); // Execute "sayHello" function.

function checkAge (name: string, age: number) {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  }
}

  checkAge("Charles", 21);
  checkAge("Abby", 27);
  checkAge("James", 18);
  checkAge("John", 17);

  let veggies = ["carrots", "beans", "potatoes"];

  for (let i of veggies) {
    console.log(i);
  }

  let names = []; // Declare a "names" array.

  names = [ // Array of 5 objects.
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
  ]

  for (let i of names) { // Use "for of" to get to the values of the keys in each object.
    checkAge(i.name, i.age)
  }

  function getLength(word: string): number {
    return word.length;
  }

  let result = getLength("Hello World");

  if (result % 2 === 0) {
    console.log('The world is nice and even!');
  } else {
    console.log('The world is an odd place!');
  }
