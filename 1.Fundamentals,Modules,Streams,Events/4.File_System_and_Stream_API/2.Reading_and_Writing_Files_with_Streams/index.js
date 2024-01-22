import fs from "fs";

// Reading Files

// let stream = fs.createReadStream("log.txt");

// stream.on("data", function (data) {
//   let chunk = data.toString();
//   console.log(chunk);
// });

// ---------------------------------------------------------------- //

// Writing Files

let stream = fs.createWriteStream("log2.txt");

stream.write("Line 1\n");
stream.write("Line 2\n");
stream.write("Line 3\n");
