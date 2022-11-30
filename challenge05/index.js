import { readFileSync } from "fs";
import { hungerGames } from "./hunger-games.js";

try {
  // read the file
  const players = JSON.parse(readFileSync(process.cwd() + "/challenge05/mecenas.json", "utf8"));
  let [winner, indexPosition] = hungerGames(players);
  console.log(winner + "-" + indexPosition);
} catch (error) {
  console.error(`ERROR: ${error}`);
}
