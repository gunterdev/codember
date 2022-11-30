import { readFileSync } from "fs";
import { ASCIIdecryptor } from "./ascii-decryptor.js";

try {
  // read the file
  const encryptedMessage = readFileSync(process.cwd() + "/challenge02/encrypted.txt", "utf8");
  const decryptedMessage = ASCIIdecryptor(encryptedMessage);
  console.log(decryptedMessage);
} catch (error) {
  console.error(`ERROR: ${error}`);
}

export default main;
