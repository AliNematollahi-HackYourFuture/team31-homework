console.log("====== Ez Namey ======");

let firstWords = [
  "Bold",
  "Dynamic",
  "Innovative",
  "Agile",
  "Bright",
  "Rapid",
  "Stellar",
  "Vibrant",
  "Creative",
  "Smart",
];
let secondWords = [
  "Fresh",
  "Limitless",
  "Next-gen",
  "Thrive",
  "Visionary",
  "Synergy",
  "Evolving",
  "Fierce",
  "Inspiring",
];

const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];

console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);
