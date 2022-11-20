import { readFileSync } from "node:fs";
import assert from "node:assert";
import test from "node:test";
//----------------------------------------------------------//
import { zebraCounter } from "./zebra-counter.js";

test("Test: Zebra - 1", () => {
  let [longestZebra, lastZebra] = zebraCounter(["red", "blue", "red", "blue", "green"]);
  assert.equal(longestZebra, 4);
  assert.equal(lastZebra, "blue");
});

test("Test: Zebra - 2", () => {
  let [longestZebra, lastZebra] = zebraCounter(["green", "red", "blue", "gray"]);
  assert.equal(longestZebra, 2);
  assert.equal(lastZebra, "gray");
});

test("Test: Zebra - 3", () => {
  let [longestZebra, lastZebra] = zebraCounter(["blue", "blue", "blue", "blue"]);
  assert.equal(longestZebra, 1);
  assert.equal(lastZebra, "blue");
});

test("Test: Zebra - 4", () => {
  let [longestZebra, lastZebra] = zebraCounter(["red", "green", "red", "green", "red", "green"]);
  assert.equal(longestZebra, 6);
  assert.equal(lastZebra, "green");
});

test("Test: Zebra - 5", () => {
  let [longestZebra, lastZebra] = zebraCounter(["blue", "red", "blue", "red", "gray"]);
  assert.equal(longestZebra, 4);
  assert.equal(lastZebra, "red");
});

test("Test: Zebra - 6", () => {
  let [longestZebra, lastZebra] = zebraCounter(["red", "red", "blue", "red", "red", "red", "green"]);
  assert.equal(longestZebra, 3);
  assert.equal(lastZebra, "red");
});

test("Test: Zebra - 7", () => {
  let [longestZebra, lastZebra] = zebraCounter(["red", "blue", "red", "green", "red", "green", "red", "green"]);
  assert.equal(longestZebra, 6);
  assert.equal(lastZebra, "green");
});

test("Test: Final Zebra Challenge", () => {
  const data = JSON.parse(readFileSync(process.cwd() + "/challenge03/colors.txt", "utf-8").replaceAll("'", '"'));
  let [longestZebra, lastZebra] = zebraCounter(data);
  assert.equal(longestZebra, 30);
  assert.equal(lastZebra, "red");
});

test("Test: Error Type", () => {
  assert.throws(function () {
    zebraCounter("blue red blue");
  });
});

test("Test: Error Range of array", () => {
  assert.throws(function () {
    zebraCounter(["blue"]);
  });
});
