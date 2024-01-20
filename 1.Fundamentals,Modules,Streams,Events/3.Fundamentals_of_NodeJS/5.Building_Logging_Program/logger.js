import fs from "fs";

export function writeLogLine(fileName, line) {
  fs.writeFile(fileName, line, (err) => {
    if (err) {
      throw err;
    }
  });
}

export function readLogFile(fileName) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  });
}

export function appendLogLine(fileName, line) {
  fs.appendFile(fileName, line, function (err) {
    if (err) {
      throw err;
    }
  });
}
