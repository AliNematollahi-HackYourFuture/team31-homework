console.log("====== Ez Namey ======");

const firstWords = [
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
const secondWords = [
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

const firstRandomNumber = Math.floor(Math.random() * 10);
const secondRandomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[firstRandomNumber] + ' ' + secondWords[secondRandomNumber];

console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);
