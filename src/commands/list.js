const {
  listTasks,
} = require("../services/taskService");

function listCommand() {
  listTasks();
}

module.exports = listCommand;