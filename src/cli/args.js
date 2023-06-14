import process from "node:process";

const parseArgs = () => {
  const [, , ...args] = process.argv;
  const newArgsArr = [];
  for (let index = 0; index < args.length; index += 2) {
    newArgsArr.push([args[index].replace("--", ""), args[index + 1]]);
  }
  const newArgsArrMap = newArgsArr.map((arr) => `${arr[0]} is ${arr[1]}`);
  process.stdout.write(newArgsArrMap.join(", "));
};

parseArgs();
