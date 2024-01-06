const fs = require("node:fs");
//we pass the path or relative of the file we want to read, the Sync in readFileSync says that this method is synchronous way of reading file
const fileContents = fs.readFileSync("source/file.txt", "utf-8");
console.log(fileContents);
