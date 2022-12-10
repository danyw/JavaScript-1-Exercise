//Number exercise 1: Age Logger
let age;
age = 35;
console.log(age);

//Number Exercise 2: So Many Rabbits
let numberOfRabbits = 2;
numberOfRabbits *= 3;
console.log(numberOfRabbits);

// Exercise 3: BODMAS
let bodmasExample = 3;
bodmasExample = (bodmasExample + 5) / 6;
console.log(bodmasExample);

// Number exercise 4: Random Number Generator
const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
console.log(randomNumber);

// Password checker
let password = "12345678";
let boolean = password.length > 7;

console.log(boolean);

// Height test
let height = "160";
let msg;

if (height >= 150) {
  msg = "You can go on a ride";
} else if (height < 150) {
  msg = "Sorry, you are not tall enough.";
} else {
  msg = "Please enter a number.";
}
console.log(msg);

//Dice Prize
let firstRoll = Math.floor(Math.random() * (7 - 1) + 1);
let secondRoll = Math.floor(Math.random() * (7 - 1) + 1);

console.log("The first roll is: " + firstRoll + ", and the second roll is: " + secondRoll);

if ((firstRoll && secondRoll) === 6) {
  console.log("You won a bear!");
} else if (firstRoll === secondRoll) {
  console.log("You won three throws!");
} else if ((firstRoll || secondRoll) % 2 == 0) {
  console.log("You won a free throw!");
} else {
  console.log("Try next time!");
}
