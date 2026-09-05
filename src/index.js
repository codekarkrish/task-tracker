const {
  readTasks,
} = require("./utils/fileManager");

console.log(readTasks());

const addCommand = require("./commands/add");
const listCommand = require("./commands/list");

const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
  case "add":
    addCommand(argument);
    break;

 case "list":
    listCommand();
    break;

  default:
    console.log("Unknown command");
}