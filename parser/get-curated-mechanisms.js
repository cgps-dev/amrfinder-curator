const curatedMechanisms = require("../amrfinder-review/curated_mechanisms.json");

function getCuratedMechanisms(organism) {
  const rules = [];
  for (const [ taxId, subclass, gene, mechanisms ] of curatedMechanisms) {
    if (taxId === organism) {
      rules.push({ subclass, gene, mechanisms });
      // rules[subclass] = rules[subclass] || {};
      // rules[subclass][gene] = [];
      // for (const dep of deps) {
      //   if (dep !== gene) {
      //     rules[subclass][gene].push(dep);
      //   }
      // }
    }
  }
  if (rules.length > 0) {
    return rules;
  }
  else {
    throw new Error(`Invalid organism code ${organism}`);
  }
}

module.exports = getCuratedMechanisms;
