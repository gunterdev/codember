import assert from "node:assert";
import test from "node:test";

import { default as main } from "./index.js";

let [correctUsers, lastUser] = main();

test("Total of correct users", () => {
  assert.equal(correctUsers, 156);
});

test("Name of the last correct User ", () => {
  assert.equal(lastUser, "@giroz");
});
