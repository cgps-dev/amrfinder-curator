function extractGenesFromGroups(groups) {
  const output = {};

  for (const [key, list] of Object.entries(groups)) {
    output[key] = {};
    for (const item of list) {
      output[key][item["gene_symbol"]] = true;
    }
  }

  return output;
}

module.exports = extractGenesFromGroups;
