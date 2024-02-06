import net from "net";
import { resolve } from "path";
import readline from "readline";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const usernameIn = new Promise((resolve) => {
  readLine.question("Enter a username: ", (answer) => {
    resolve(answer);
  });
});

usernameIn.then((username) => {
  const client = net.connect({ port: 8080 }, function () {
    console.log("Connected to Server: 8080");
  });

  readLine.on("line", (data) => {
    client.write(username + " : " + data);
  });

  client.on("data", function (data) {
    console.log(data.toString());
  });
});
