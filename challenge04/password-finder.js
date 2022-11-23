export const passwordFinder = () => {
  let arr = [];
  for (let value = 11155; value <= 55999; value++) {
    if (isValid(value)) {
      arr.push(value);
    }
  }
  return arr;
};

export const isValid = (e) => {
  let str = e.toString();
  if (!str.includes("55")) return false;
  for (e = 0; e < str.length - 1; e++) {
    if (str[e] > str[e + 1]) return false;
  }
  return true;
};
