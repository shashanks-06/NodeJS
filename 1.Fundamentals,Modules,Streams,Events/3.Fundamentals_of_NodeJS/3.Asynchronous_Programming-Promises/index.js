import fs from "fs";

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });
};

getFile("async.txt")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
