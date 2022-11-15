import { readFileSync } from "fs";

function main() {
  try {
    // read the file
    const encryptedMessage = readFileSync(process.cwd() + "/challenge02/encrypted.txt", "utf8").split(" ");
    const decryptedMessage = encryptedMessage
      .map((wordToDecrypt) => {
        // Array that we are going to fill with the letters that form the word but decrypted.
        let chunk = [];
        // Here we are going to be adding the numbers until its a valid ASCII value "letters".
        let charCode = "";
        for (let aux of wordToDecrypt) {
          // We add the numbers, so we can decrypt them e.g. -> "10" + "1" = "101" ->  101 decrypted is "e".
          charCode += aux;
          // We parse the string to number, because ASCII works with numbers.
          // We can use aux variable in this case, because we used the variable so we don't need it anymore.
          aux = parseInt(charCode);
          if (aux > 31) {
            // 31 because is where the letters of ASCII Starts.
            // "e push the decrypted letter to the chunk.
            chunk.push(String.fromCharCode(aux));
            // We reset the string, so we can build the next letter.
            charCode = "";
          }
        }
        // we return the word by joining the letters,
        return chunk.join("");
      })
      .join(" ");
    //After that we should have message decrypted.
    return decryptedMessage;
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}

main();
export default main;
