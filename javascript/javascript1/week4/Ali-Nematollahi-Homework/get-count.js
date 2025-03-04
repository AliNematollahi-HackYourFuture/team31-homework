function getCount(str) {
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i in str) {
    if (vowels.includes(str[i])) {
      counter++;
    }
  }
  return counter;
}
