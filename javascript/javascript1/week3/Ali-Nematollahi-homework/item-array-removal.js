console.log("======== item-array-removal ========");

let names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";

names = names.filter(item => item !== nameToRemove)

console.log(names);