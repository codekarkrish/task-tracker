const {
  deleteTask,
} = require("../services/taskService");

function deleteCommand(id) {
  deleteTask(id);
}

module.exports = deleteCommand;