export const passwordFinder = () => {
  let arr = [];
  for (let value = 11155; value <= 55999; value++) {
    let isIncreasing = true;
    let strValue = value.toString();
    let i = 0;
    while (i < strValue.length - 1 && isIncreasing) {
      if (strValue[i] > strValue[i + 1]) {
        isIncreasing = false;
      }
      i++;
    }
    if (strValue.includes("55") && isIncreasing) {
      arr.push(value);
    }
  }
  return arr;
};
