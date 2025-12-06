var greeting = "Hello, World!";
console.log(greeting);

let number = 10;
number += 5;
console.log(number);

const age = 25;
age ? console.log("You are an adult.") : console.log("You are a minor.");

const name = () => {
  return "John Doe";
};

const keren = true;

console.log(typeof greeting);
console.log(typeof number);
console.log(typeof age);
console.log(typeof name);
console.log(typeof keren);

let angka = 8;
if (angka / 2) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// comment this line

let job = "proggramer";
switch (job) {
  case "proggramer":
    console.log("Ngoding");
    break;
  case "designer":
    console.log("Mendesain");
    break;
  default:
    console.log("Menganggur");
}

let angkaBulat = 7;
let angkaDesimal = 7.5;
