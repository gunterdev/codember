import { readFileSync } from "node:fs";
import assert from "node:assert";
import test from "node:test";
//----------------------------------------------------------//
import { DBUserValidator } from "./db-user-validator.js";

test("Test: 1 - User Validator", () => {
  const [validUsers, lastValidUser] = DBUserValidator("usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82");
  assert.equal(validUsers, 1);
  assert.equal(lastValidUser, "@midudev");
});

test("Test: 2 - User Validator", () => {
  const [validUsers, lastValidUser] = DBUserValidator(
    "fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World"
  );
  assert.equal(validUsers, 1);
  assert.equal(lastValidUser, "@codember");
});

test("Test: 3 - User Validator", () => {
  const [validUsers, lastValidUser] = DBUserValidator(
    "psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com"
  );
  assert.equal(validUsers, 0);
  assert.equal(lastValidUser, undefined);
});

test("Test: 4 - User Validator", () => {
  const [validUsers, lastValidUser] = DBUserValidator("usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com");
  assert.equal(validUsers, 1);
  assert.equal(lastValidUser, "@itziar");
});

test("Test: Final User Validator", () => {
  const data = readFileSync(process.cwd() + "/challenge01/users.txt", "utf8");
  const [validUsers, lastValidUser] = DBUserValidator(data);
  assert.equal(validUsers, 156);
  assert.equal(lastValidUser, "@giroz");
});
