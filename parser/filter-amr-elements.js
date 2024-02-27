const bannedMethods = [
  "PARTIALX",
  "PARTIALP",
  "PARTIAL_CONTIG_ENDX",
  "PARTIAL_CONTIG_ENDP",
  "INTERNAL_STOP",
];

function filterAmrElements(list) {
  const filtered = [];

  for (const item of list) {
    if (item["element_type"] === "AMR" && !bannedMethods.includes(item["method"])) {
      filtered.push(item);
    }
  }

  return filtered;
}

module.exports = filterAmrElements;
