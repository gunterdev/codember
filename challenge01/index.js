import { readFileSync } from "fs";
import { DBUserValidator } from "./db-user-validator.js";

try {
  const data = readFileSync(process.cwd() + "/challenge01/users.txt", "utf8");
  const [validUsers, lastValidUser] = DBUserValidator(data);
  console.log(`[${validUsers}, ${lastValidUser}]`);
} catch (error) {
  console.error(`ERROR: ${error}`);
}
