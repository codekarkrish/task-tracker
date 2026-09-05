const {
  updateTask,
} = require("../services/taskService");

function updateCommand(id, description) {
  updateTask(id, description);
}

module.exports = updateCommand;