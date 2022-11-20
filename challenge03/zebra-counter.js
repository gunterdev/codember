export const zebraCounter = function (zebraList) {
  if (!Array.isArray(zebraList)) throw new TypeError(`${typeof zebraList} is not an Array`);
  if (zebraList.length < 2) throw new RangeError("The length of the array must have atleast 2 values");

  let zebra = zebraList[0],
    nextZebra = zebraList[1],
    maxZebra = 1,
    zebraCounter = zebra === nextZebra ? 1 : 2,
    lastZebra = "";

  for (let i = 2; i < zebraList.length; i++) {
    if (zebra === zebraList[i]) {
      zebra === nextZebra ? (zebraCounter = 1) : zebraCounter++;
    } else {
      maxZebra = Math.max(zebraCounter, maxZebra);
      zebraCounter = 2;
    }

    if (zebraCounter >= maxZebra) {
      lastZebra = zebraList[i];
    }

    [zebra, nextZebra] = [nextZebra, zebraList[i]];
  }
  maxZebra = Math.max(zebraCounter, maxZebra);
  return [maxZebra, lastZebra === "" ? nextZebra : lastZebra];
};
