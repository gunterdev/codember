import { readFileSync } from "fs";

const REQUIRED_KEYS = ["usr", "eme", "psw", "psw", "age", "loc", "fll"];

function main() {
  try {
    // read the file and split the users
    const userDataLines = readFileSync(process.cwd() + "/challenge01/users.txt", "utf8").split("\r\n");

    // Variables we are going to use
    const users = [];
    let tmpUserDataStr = "";

    // Loop over the data we have split
    for (const line of userDataLines) {
      if (line !== "") {
        // We need to concat the strings to build all the user data.
        tmpUserDataStr = tmpUserDataStr !== "" ? tmpUserDataStr.concat(" ", line) : line;
      } else {
        // If it's an Empty string, it means that we have all the info of the current user
        // Split the user string into keypair strings
        // e.g. => 'fll:111 eme:yrfa@gmail.com usr:@codember' into => ['fll:111','eme:yrfa@gmail.com','usr:@codember'']
        // After getting the string keypairs, we map the array to transform every keyPairString into an entry
        // e.g. => 'fll:111' into => ['ffl':'111']
        const entries = tmpUserDataStr.split(" ").map((keyPairString) => keyPairString.split(":"));

        // Finally, we create our object using the method Object.fromEntries()
        // More info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
        const user = Object.fromEntries(entries);

        // Check if the object have all the required  keys.
        if (REQUIRED_KEYS.every((key) => Object.hasOwn(user, key))) {
          users.push(user);
        }
        // Reset the string, so we can build the next user.
        tmpUserDataStr = "";
      }
    }
    //After that we should have the count of valid users and the last user name.
    return [users.length, users.at(-1).usr];
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}
main();
export default main;
