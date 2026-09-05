const {
  readTasks,
} = require("./utils/fileManager");

console.log(readTasks());

const addCommand = require("./commands/add");
const listCommand = require("./commands/list");
const updateCommand = require("./commands/update");
const deleteCommand = require("./commands/delete");
const markProgressCommand = require("./commands/markProgress");
const markDoneCommand = require("./commands/markDone");

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

  case "delete":
    deleteCommand(arg1);
    break;

 case "mark-in-progress":
  markProgressCommand(arg1);
  break;

case "mark-done":
  markDoneCommand(arg1);
  break;
  
  default:
    console.log("Unknown command");
}