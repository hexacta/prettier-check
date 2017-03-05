import test from "ava";
import fn from ".";

test("good file", async t => {
  const code = await fn(["test-files/good.js"]);
  t.is(code, 0);
});

test("bad file", async t => {
  const code = await fn(["test-files/bad.js"]);
  t.is(code, 4);
});

test("ugly file", async t => {
  const code = await fn(["test-files/ugly.js"]);
  t.is(code, 3);
});
