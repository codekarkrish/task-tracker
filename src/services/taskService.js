const {
  readTasks,
  writeTasks,
} = require("../utils/fileManager");

// Add task
function addTask(description) {
      if (!description) {
    console.log("Description is required");
    return;
  }

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

//List 
function listTasks() {
  const tasks = readTasks();

  if (tasks.length === 0) {
    console.log("No tasks found");
    return;
  }

  tasks.forEach((task) => {
    console.log(
      `${task.id}. ${task.description} [${task.status}]`
    );
  });
}

module.exports = {
  addTask,
    listTasks,
};