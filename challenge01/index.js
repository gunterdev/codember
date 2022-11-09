import { readFileSync } from "fs";

const VALID_KEYS = ["usr", "eme", "psw", "psw", "age", "loc", "fll"];

function main() {
  try {
    // read the file
    const data = readFileSync(process.cwd() + "/challenge01/users.txt", "utf8");
    // Split the users
    let splitedData = data.split("\r\n");

    // Variables we are going to use
    let validUsers = 0;
    let lastCorrectUserName = undefined;
    let userDataStr = "";

    // Loop over the data we have split
    for (const data of splitedData) {
      // If it's an Empty string, it means that we have all the info of the current user
      if (isEmptyString(data)) {
        // Split the user string into keypair strings
        // e.g. => 'fll:111 eme:yrfa@gmail.com usr:@codember' into => ['fll:111','eme:yrfa@gmail.com','usr:@codember'']
        let user = userDataStr.split(" ");

        // After getting the string keypairs, we map the array to transform every keyPairString into an entry
        // e.g. => 'fll:111' into => ['ffl':'111']
        const entries = user.map((keyPairString) => keyPairString.split(":"));

        // Finally, we create our object using the method Object.fromEntries()
        // More info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
        user = Object.fromEntries(entries);

        // Check if the object have all the valid keys.
        if (hasValidKeys(user, VALID_KEYS)) {
          validUsers++;
          lastCorrectUserName = user["usr"];
        }
        // Reset the string, so we can build the next user.
        userDataStr = "";
      } else {
        // We need to concat the strings to build all the user data.
        userDataStr = userDataStr !== "" ? userDataStr.concat(" ", data) : data;
      }
    }
    //After that we should have the count of valid users and the last user name.
    console.log(validUsers + lastCorrectUserName);
    //this is for the test, nothing important.
    return [validUsers, lastCorrectUserName];
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}

/**
 * Checks if the variables is typeof string, and if its empty.
 * @param {string} str Variable to be checked
 * @returns boolean
 */
function isEmptyString(str) {
  return typeof str === "string" && str.trim().length === 0;
}

/**
 * Checks if all the keys are defined in the object.
 * @param {object} user object to check
 * @param {string[]} keys keys that will be checked
 * @returns boolean
 */
function hasValidKeys(obj, keys) {
  return keys.every((key) => {
    return Object.hasOwn(obj, key);
  });
}

main();
export default main;
