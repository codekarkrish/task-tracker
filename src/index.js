const {
  readTasks,
} = require("./utils/fileManager");

console.log(readTasks());

const addCommand = require("./commands/add");

const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
  case "add":
    addCommand(argument);
    break;

  default:
    console.log("Unknown command");
}