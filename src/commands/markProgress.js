const {
  updateTaskStatus,
} = require("../services/taskService");

function markProgressCommand(id) {
  updateTaskStatus(
    id,
    "in-progress"
  );
}

module.exports = markProgressCommand;