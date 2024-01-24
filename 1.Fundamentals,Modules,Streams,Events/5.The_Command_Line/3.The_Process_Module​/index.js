import process from "process";

process.on("beforeExit", (code) => {
  console.log(code);
});
