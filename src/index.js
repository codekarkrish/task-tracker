const {
  readTasks,
} = require("./utils/fileManager");

console.log(readTasks());

const addCommand = require("./commands/add");
const listCommand = require("./commands/list");
const updateCommand = require("./commands/update");

const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

switch (command) {
  case "add":
    addCommand(argument);
    break;

 case "list":
    listCommand();
    break;

  case "update":
    updateCommand(arg1, arg2);
    break;

  default:
    console.log("Unknown command");
}