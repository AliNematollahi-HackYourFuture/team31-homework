
let total = 0;
let quantity = 0;
let isSucceed = true;

process.argv.forEach((item, index) => {
  if (index > 1) {
    if (isNaN(item)) {
        //  provided arguments are not numbers
      console.log(`${item} is invalid`);
      isSucceed = false;
    } else {
      total += Number(item);
      quantity++;
    }
  }
});

if (process.argv.length < 3) {
  // no arguments are provided
  console.log("Please enter numbers");
} else if (isSucceed) {
  console.log(`Avarage is: ${total / quantity}`);
}
