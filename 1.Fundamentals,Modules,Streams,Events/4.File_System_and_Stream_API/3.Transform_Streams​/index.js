import fs, { writeFileSync } from "fs";
import { Transform } from "stream";

const fileReadStream = fs.createReadStream("log.txt");
const fileWriteStream = fs.createWriteStream("log2.txt");

const trans = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

fileReadStream.pipe(trans).pipe(fileWriteStream);
