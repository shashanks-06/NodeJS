import * as stringify from "csv-stringify";
import fs from "fs";

const write = fs.createWriteStream("logS.csv");
const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
const columns = ["num1", "num2", "num3"];

const stringifier = stringify.stringify({ header: true, columns: columns });

for (let i = 0; i < data.length; i++) {
  stringifier.write(data[i]);
}

stringifier.pipe(write);
