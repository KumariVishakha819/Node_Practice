const path = require("path");

console.log(__filename);
console.log(__dirname);
//To fetch the last portion of the url passed in path.basename()
console.log("-------------------------------------");
console.log(path.basename(__filename));
console.log(path.basename(__dirname));
//To fetch the extension of the url passed in  path.extname()
console.log("-----------------------------------");
console.log(path.extname(__filename));
console.log(path.extname(__dirname)); // empty as no extension is there
//To get the details of the path path.parse()
console.log("-----------------------------------");
console.log(path.parse(__filename));
console.log(path.parse(__dirname));
//To check whether this path exits or not we use path.isAbsolute
console.log("-----------------------------------");
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute(__dirname));
//To join all the given paths segments together using the platform specific seperator as a delimiter,
//by platform specific delimeter meand / for mac \ for windows
console.log("-----------------------------------");
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("folder1", "//folder2", "index.html")); //Normalizes the path removes one /
console.log(path.join(__dirname, "data.json"));
//to resolve sequence of paths or path segments into absolute path
console.log("-----------------------------------");
//if your arguments dont contain a forward slash resolve will add  an absolute path to the current folder and join the arguments
console.log(path.resolve("folder1", "folder2", "index.html"));
// if we provide forward slash result will return the absolute path from that forward slash
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("folder1", "//folder2", "index.html")); //Normalizes the path removes one /
console.log(path.resolve(__dirname, "data.json"));
