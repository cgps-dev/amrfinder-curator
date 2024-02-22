const curatedMechanisms = require("./curated-mechanisms.json");

function getCuratedMechanisms(organism) {
  if (organism in curatedMechanisms) {
    return curatedMechanisms[organism];
  }
  else {
    throw new Error(`Invalid organism code ${organism}`);
  }
}

module.exports = getCuratedMechanisms;
