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


//update 

function updateTask(id, description) {

  if (!description) {
    console.log("Description is required");
    return;
  }

  const tasks = readTasks();

  const task = tasks.find(
    (task) => task.id === Number(id)
  );

  if (!task) {
    console.log("Task not found");
    return;
  }

  task.description = description;
  task.updatedAt = new Date().toISOString();

  writeTasks(tasks);

  console.log("Task updated successfully");
}

module.exports = {
  addTask,
    listTasks,
    updateTask,
};