import { ArgumentParser } from "argparse";

const parser = new ArgumentParser({
  description: "A Simple command line Utility",
});

parser.add_argument("-f", "-foo", { help: "Enter some value" });
parser.add_argument("-g", { help: "Enter the value of g" });

let args = parser.parse_args();

console.log(args);
