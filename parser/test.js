const test = require("node:test");
const assert = require("node:assert");

const parser = require("./index.js");

test("ERR4626366 test", async (t) => {
  const input = require("../tests/1280/ERR4626366.json");
  const output = parser("1280", input);
  assert.deepEqual(
    output,
    {
      "METHICILLIN": ["mecA"],
    }
  );
});

test("SRR1955864 test", async (t) => {
  const input = require("../tests/1280/SRR1955864.json");
  const output = parser("1280", input);
  assert.deepEqual(
    output,
    {
      "METHICILLIN": ["mecA"],
      "VANCOMYCIN": ["vanA", "vanH-A", "vanR-A", "vanS-A", "vanX-A", "vanY-A", "vanZ-A"],
    }
  );
});
