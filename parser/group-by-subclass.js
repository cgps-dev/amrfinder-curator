const groupBy = require("object.groupby");

function groupBySubclass(list) {
  const groups = groupBy(list, (x) => x["subclass"]);

  return groups;
}

module.exports = groupBySubclass;
