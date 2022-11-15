import assert from "node:assert";
import test from "node:test";

import { default as main } from "./index.js";

let message = main();

test("Decrypted Message", () => {
  assert.equal(message, "thanks for playing codember please share");
});
