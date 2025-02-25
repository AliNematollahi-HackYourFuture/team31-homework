function highAndLow(numbers) {
  const stringArray = numbers.split(" ");
  const numbersArray = [];
  for (i in stringArray) {
    numbersArray.push(parseFloat(stringArray[i]));
  }
  const max = Math.max(...numbersArray);
  const min = Math.min(...numbersArray);

  return max.toString() + " " + min.toString();
}
