export const ASCIIdecryptor = function (encryptedMessage) {
  if (typeof encryptedMessage !== typeof "") throw new TypeError(`${typeof encryptedMessage} is not a string`);
  return encryptedMessage
    .split(" ")
    .map((wordToDecrypt) => {
      let chunk = [];

      let charCode = "";
      for (let aux of wordToDecrypt) {
        charCode += aux;

        aux = parseInt(charCode);
        if (isNaN(aux)) {
          chunk.push(aux);
          charCode = "";
        } else if (aux > 31) {
          chunk.push(String.fromCharCode(aux));
          charCode = "";
        }
      }
      return chunk.join("");
    })
    .join(" ");
};
