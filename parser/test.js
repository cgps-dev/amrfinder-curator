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

test("DRR039865 test", async (t) => {
  const input = require("../tests/470/DRR039865.json");
  const output = parser("470", input);
  assert.deepEqual(
    output,
    {
      "CARBAPENEM": ["blaOXA-23", "blaOXA-420"].sort(),
    }
  );
});

test("ERR6132418 test", async (t) => {
  const input = require("../tests/470/ERR6132418.json");
  const output = parser("470", input);
  assert.deepEqual(
    output,
    {
      "CARBAPENEM": ["blaNDM-1","blaOXA-23"].sort(),
    }
  );
});

test("SRR15948204 test", async (t) => {
  const input = require("../tests/470/SRR15948204.json");
  const output = parser("470", input);
  assert.deepEqual(
    output,
    {
      "CARBAPENEM": ["blaNDM-1","blaOXA-58","blaOXA-72"].sort(),
    }
  );
});

test("SRR16520624 test", async (t) => {
  const input = require("../tests/470/SRR16520624.json");
  const output = parser("470", input);
  assert.deepEqual(
    output,
    {
      "CARBAPENEM": ["blaNDM-1","blaOXA-58","blaOXA-72"].sort(),
    }
  );
});

test("SRR17311613 test", async (t) => {
  const input = require("../tests/470/SRR17311613.json");
  const output = parser("470", input);
  assert.deepEqual(
    output,
    {
      "CARBAPENEM": ["blaNDM-1","blaOXA-23","blaOXA-237"].sort(),
    }
  );
});

test("SRR18507761 test", async (t) => {
  const input = require("../tests/470/SRR18507761.json");
  const output = parser("470", input);
  assert.deepEqual(
    output,
    {},
  );
});

test("ERR3184666 test", async (t) => {
  const input = require("../tests/287/ERR3184666.json");
  const output = parser("287", input);
  assert.deepEqual(
    output,
    {
      "CARBAPENEM": [ "blaVIM", "blaVIM-2", "oprD_Q142STOP" ].sort(),
    }
  );
});

test("ERR3418584 test", async (t) => {
  const input = require("../tests/287/ERR3418584.json");
  const output = parser("287", input);
  assert.deepEqual(
    output,
    {
      "CARBAPENEM": [ "oprD_Q142STOP" ],
    }
  );
});

test("ERR4368920 test", async (t) => {
  const input = require("../tests/287/ERR4368920.json");
  const output = parser("287", input);
  assert.deepEqual(
    output,
    {
      "CARBAPENEM": [ "blaVIM-2" ],
    }
  );
});

test("SRR14790815 test", async (t) => {
  const input = require("../tests/287/SRR14790815.json");
  const output = parser("287", input);
  assert.deepEqual(
    output,
    {
      "CARBAPENEM": [ "blaKPC-2" ],
    }
  );
});

test("DRR021825 test", async (t) => {
  const input = require("../tests/287/DRR021825.json");
  const output = parser("287", input);
  assert.deepEqual(
    output,
    {
      "CARBAPENEM": [ "blaIMP-7" ],
    }
  );
});
