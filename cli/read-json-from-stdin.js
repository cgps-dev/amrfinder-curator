function readJsonFromStdin() {
  return new Promise((resolve, reject) => {
    let inputData = "";

    // Reading data from stdin
    process.stdin.setEncoding("utf8");
    process.stdin.on(
      "data",
      (chunk) => {
        inputData += chunk;
      },
    );

    // Handling the end of input
    process.stdin.on("end", () => {
      try {
        const jsonData = JSON.parse(inputData);
        resolve(jsonData);
      }
      catch (error) {
        reject(error);
      }
    });

    process.stdin.on("error", reject);
  });
}

module.exports = readJsonFromStdin;
