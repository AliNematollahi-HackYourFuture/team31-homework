function squareDigits(num) {
  const numString = num.toString();
  let resultNumStr = "";
  for (let i in numString) {
    const int = Number(numString[i]);
    resultNumStr += (int * int).toString();
  }
  return Number(resultNumStr);
}
