const {
  updateTaskStatus,
} = require("../services/taskService");

function markDoneCommand(id) {
  updateTaskStatus(
    id,
    "done"
  );
}

module.exports = markDoneCommand;