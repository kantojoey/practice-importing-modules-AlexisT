function addTask(tasks, task) {
  tasks.push(task);
  return tasks;
}

function listTasks(tasks) {
  if (tasks.length === 0) {
    console.log(`No tasks found.`);
  } else {
    console.log(`\nTask list: ${tasks.join(", ")}\n`);
  }
}

/* const taskList = []; */

module.exports = { addTask, listTasks };

/* console.log(addTask(taskList, "Wash Car"));

listTasks(taskList); */
