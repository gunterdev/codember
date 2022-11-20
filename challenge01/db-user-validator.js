export const DBUserValidator = function (userData) {
  const userDataLines = userData.split("\r\n");
  userDataLines.push(""); // this is needed so we can validate the last user

  const REQUIRED_KEYS = ["usr", "eme", "psw", "age", "loc", "fll"];
  const users = [];
  let tmpUserDataStr = "";

  for (const line of userDataLines) {
    if (line !== "") {
      tmpUserDataStr = tmpUserDataStr !== "" ? tmpUserDataStr.concat(" ", line) : line;
    } else {
      const entries = tmpUserDataStr.split(" ").map((keyPairString) => keyPairString.split(":"));

      const user = Object.fromEntries(entries);
      console.log(user);
      if (REQUIRED_KEYS.every((key) => Object.hasOwn(user, key))) {
        users.push(user);
      }
      tmpUserDataStr = "";
    }
  }
  return [users.length, users.at(-1)?.usr];
};
