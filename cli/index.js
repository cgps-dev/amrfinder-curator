const parser = require("../parser/index.js");

const readJsonFromStdin = require("./read-json-from-stdin.js");

async function main() {
  const input = await readJsonFromStdin();
  const output = parser(input);
  console.log(JSON.stringify(output));
}

main().catch(console.error);
