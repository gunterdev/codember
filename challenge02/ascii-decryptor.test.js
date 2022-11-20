import assert from "node:assert";
import { readFileSync } from "node:fs";
import test from "node:test";
//----------------------------------------------------------//
import { ASCIIdecryptor } from "./ascii-decryptor.js";

test("Test: 1 - Ascii decrypt", () => {
  assert.equal(ASCIIdecryptor("109105100117"), "midu");
});

test("Test: 2 - Ascii decrypt", () => {
  assert.equal(ASCIIdecryptor("9911110010110998101114"), "codember");
});

test("Test: 3 - Ascii decrypt", () => {
  const message = readFileSync(process.cwd() + "/challenge02/encrypted.txt", "utf8").split(" ");
  assert.equal(ASCIIdecryptor("9911110010110998101114 109105100117"), "codember midu");
});

test("Test: 4 - Ascii decrypt", () => {
  assert.equal(ASCIIdecryptor("11210897121 116101116114105115"), "play tetris");
});

test("Test: Final decrypted message challenge", () => {
  const message = readFileSync(process.cwd() + "/challenge02/encrypted.txt", "utf8");
  assert.equal(ASCIIdecryptor(message), "thanks for playing codember please share");
});
