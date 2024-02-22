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
  const geneFlagsBySubclass = extractGenesFromGroups(groups);

  const curatedMechanisms = getCuratedMechanisms(organism);

  const output = {};
  for (const [subclass, mechanismMap] of Object.entries(curatedMechanisms)) {
    const foundGenes = geneFlagsBySubclass[subclass];
    if (foundGenes) {
      for (const [actualMechanism, dependentMechanisms] of Object.entries(mechanismMap)) {
        if (foundGenes[actualMechanism]) {
          output[subclass] = [];
          output[subclass].push(actualMechanism);
          for (const dependentMechanism of dependentMechanisms) {
            if (foundGenes[actualMechanism]) {
              output[subclass].push(dependentMechanism);
            }
          }
        }
      }
    }
  }
  
  return output;
}

module.exports = main;
