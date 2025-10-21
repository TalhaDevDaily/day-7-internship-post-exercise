// const alphabet = ["A", "B", "C", "D", "E", "F"];
// const numbers = ["1", "2", "3", "4", "5", "6"];

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
/*
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
*/

// Spread Operator
/*
let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

// console.log(maximum);
// console.log(minimum);

let username = "Abu Talha Tamim";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potato"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);
*/

// Rest Parameters
/*
function openFridge(...foods) {
  console.log(...foods);
}

function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);
*/
