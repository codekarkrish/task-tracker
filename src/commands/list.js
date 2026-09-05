const {
  listTasks,
} = require("../services/taskService");

function listCommand(status) {
  listTasks(status);
}

module.exports = listCommand;