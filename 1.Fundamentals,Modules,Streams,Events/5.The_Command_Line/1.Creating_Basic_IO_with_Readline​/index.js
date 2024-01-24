import readline from "readline";

let r1 = readline.createInterface(process.stdin, process.stdout);

r1.question("What is you name ? ", (name) => {
  r1.write("Your name is " + name);
  //   console.log("Your name is " + name);
  r1.close();
});
