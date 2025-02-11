console.log("============== Candy helper ============== ");

const candyPricesPerGram = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewingGum: 0.03,
};

let boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;
let totalPrice = 0;
let i = 0;

function addCandy(candyType, weight) {

    (weight * candyPricesPerGram[candyType] + totalPrice) <= amountToSpend
    ? boughtCandyPrices.push(weight * candyPricesPerGram[candyType])
    : console.log(`Not enough money, you only have ${amountToSpend-totalPrice} left`);

    canBuyMoreCandy() ? console.log("You can buy more, so please do!")
    : console.log("Enough candy for you!");
}

addCandy("sweet", 5);
addCandy("chocolate", 10);
addCandy("toffee", 15);
addCandy("chewingGum", 25);
addCandy("toffee", 100);


while (boughtCandyPrices[i]) {
  totalPrice += boughtCandyPrices[i];
  i++;
}

function canBuyMoreCandy() {
  return amountToSpend > totalPrice ? true : false;
}

