import * as csv from "csv-parse";
import fs from "fs";

fs.createReadStream("log.csv")
  .pipe(csv.parse({ delimiter: "," }))
  .on("data", function (row) {
    console.log(row);
    // console.log(row[0]);
  });
