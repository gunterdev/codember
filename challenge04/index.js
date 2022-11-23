import { passwordFinder } from "./password-finder.js";

let validPasswords = passwordFinder();
console.log(validPasswords[55], validPasswords.length);
