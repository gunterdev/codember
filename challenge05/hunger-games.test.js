import assert from "node:assert";
import { readFileSync } from "node:fs";
import test from "node:test";
//----------------------------------------------------------//
import { hungerGames } from "./hunger-games.js";

test("Test: 1 - Hunger games", () => {
  let [winner, indexPosition] = hungerGames(["Raul", "Juan", "Eric", "Kuroe"]);
  assert.equal(winner, "Raul");
  assert.equal(indexPosition, 0);
});

test("Test: 2 - Hunger games", () => {
  let [winner, indexPosition] = hungerGames([
    "Raul",
    "Juan",
    "Eric",
    "Kuroe",
    "Raul",
    "Juan",
    "Eric",
    "Kuroe",
    "Raul",
    "Juan",
    "Eric",
    "Kuroe",
  ]);
  assert.equal(winner, "Raul");
  assert.equal(indexPosition, 8);
});

test("Test: 3 - Hunger games", () => {
  let [winner, indexPosition] = hungerGames([
    "Raul",
    "Juan",
    "Eric",
    "Kuroe",
    "midudev",
    "Juan",
    "Eric",
    "Kuroe",
    "Raul",
    "Juan",
    "Eric",
    "midudev",
    "Juan",
    "Eric",
    "midudev",
    "Juan",
    "Eric",
    "midudev",
  ]);
  assert.equal(winner, "midudev");
  assert.equal(indexPosition, 4);
});

test("Test: Final - hunger games", () => {
  const players = JSON.parse(readFileSync(process.cwd() + "/challenge05/mecenas.json", "utf8"));
  let [winner, indexPosition] = hungerGames(players);
  assert.equal(winner, "Diana");
  assert.equal(indexPosition, 100);
});
