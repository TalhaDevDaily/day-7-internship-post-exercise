const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// Destructuring in Arrays
/*
const [a, , c, ...rest] = alphabet;

const newArray = [...alphabet, ...numbers];

// console.log(a);
// console.log(c);
// console.log(rest);

// console.log(newArray);

function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);
// console.log(sum);
// console.log(multiply);
// console.log(division);
*/

// Destructuring in Objects
const personOne = {
  name: "Kyle",
  age: 24,
  favouriteFood: "Rice",
  address: {
    city: "Somewhere",
    state: "One of them",
  },
};

const personTwo = {
  age: 32,
  favouriteFood: "Watermelon",
};

const personThree = { ...personOne, ...personTwo };

const { name: firstName = "John", ...rest } = personTwo;
// console.log(firstName);

// console.log(rest);

// console.log(personThree);

function printUser({ name, age, favouriteFood = " Watermelon" }) {
  console.log(`Name is ${name}. Age is ${age}. Food is ${favouriteFood}`);
}

printUser(personOne);
