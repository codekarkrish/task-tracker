const {
  addTask,
} = require("../services/taskService");

function addCommand(description) {
  addTask(description);
}

module.exports = addCommand;