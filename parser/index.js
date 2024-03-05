const filterAmrElements = require("./filter-amr-elements.js");
const getCuratedMechanisms = require("./get-curated-mechanisms.js");

function createAliasMap(
  rules,
) {
  const map = new Map();

  for (const { subclass, aliases } of rules) {
    if (aliases) {
      for (const alias of aliases) {
        map.set(alias, subclass);
      }
    }
  }

  return map;
}

function extractHits(
  amrElements,
  aliasMap,
) {
  const hits = {};

  for (const element of amrElements) {
    const subclass = aliasMap.get(element["subclass"]) || element["subclass"];
    hits[subclass] ??= {};
    hits[subclass][element["gene_symbol"]] = true;
  }

  return hits;
}

function main(
  organism,
  list,
) {
  const amrElements = filterAmrElements(list);

  const rules = getCuratedMechanisms(organism);

  const aliasMap = createAliasMap(rules);

  const hitsBySubclass = extractHits(
    amrElements,
    aliasMap,
  );

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
