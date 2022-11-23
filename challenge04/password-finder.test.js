import assert from "node:assert";
import test from "node:test";
//----------------------------------------------------------//
import { isValid } from "./password-finder.js";

test("Test: 55678 Validation - should be true", () => {
  assert.equal(isValid(55678), true);
});

test("Test: 12555 Validation - should be true", () => {
  assert.equal(isValid(12555), true);
});

test("Test: 55555 Validation - should be true", () => {
  assert.equal(isValid(55555), true);
});

test("Test: 12345 Validation - should be false", () => {
  assert.equal(isValid(12345), false);
});

test("Test: 57775 Validation - should be false", () => {
  assert.equal(isValid(57775), false);
});
