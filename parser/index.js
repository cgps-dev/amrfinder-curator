const filterAmrElements = require("./filter-amr-elements.js");
const groupBySubclass = require("./group-by-subclass.js");
const getCuratedMechanisms = require("./get-curated-mechanisms.js");
const extractGenesFromGroups = require("./extract-genes-from-groups.js");

function main(
  organism,
  list,
) {
  const amrElements = filterAmrElements(list);
  const groups = groupBySubclass(amrElements);
  const hitsBySubclass = extractGenesFromGroups(groups);

  const rules = getCuratedMechanisms(organism);

  const output = {};
  for (const rule of rules) {
    const { subclass, gene, mechanisms } = rule;
    const foundHits = hitsBySubclass[subclass];
    if (foundHits) {
      if (mechanisms.every((x) => foundHits[x])) {
        output[subclass] = output[subclass] || new Set();
        for (const item of gene.split(";")) {
          output[subclass].add(item);
        }
        // console.error("adding", rules.indexOf(rule), subclass, gene, mechanisms)
      }
    }
  }

  for (const [subclass, set] of Object.entries(output)) {
    output[subclass] = Array.from(set).sort();
  }
  
  return output;
}

module.exports = main;
