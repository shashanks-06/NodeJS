import crypto from "crypto";

const algorithm = "sha256";
const key = crypto.randomBytes(32);

const hash1 = crypto.createHash(algorithm, key).update("test").digest("hex");
const hash2 = crypto.createHash(algorithm, key).update("test").digest("hex");

console.log(hash1); // 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
console.log(hash2); // 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08

// both hash1 and hash2 are same
