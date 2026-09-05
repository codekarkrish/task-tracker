const {
  readTasks,
  writeTasks,
} = require("../utils/fileManager");

function addTask(description) {
  const tasks = readTasks();

  const newTask = {
    id: tasks.length + 1,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  writeTasks(tasks);

  console.log(
    `Task added successfully (ID: ${newTask.id})`
  );
}

module.exports = {
  addTask,
};