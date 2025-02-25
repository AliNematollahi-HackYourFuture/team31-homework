function squareDigits(num) {
  const numString = num.toString();
  resultNumStr = "";
  for (i in numString) {
    const int = Number(numString[i]);
    resultNumStr += (int * int).toString();
  }
  return Number(resultNumStr);
}
