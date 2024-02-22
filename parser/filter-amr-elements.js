function filterAmrElements(list) {
  const filtered = [];

  for (const item of list) {
    if (item["element_type"] === "AMR") {
      filtered.push(item);
    }
  }

  return filtered;
}

module.exports = filterAmrElements;
