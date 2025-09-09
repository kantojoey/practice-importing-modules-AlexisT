const fileHandler = require("./fileHandler");
const taskManager = require("./taskManager");
const path = require("path");

const taskList = [];

fileHandler.loadTasks("./tasks.json");

taskManager.addTask(taskList, "Cut Hair");

taskManager.addTask(taskList, "Wash Car");

taskManager.addTask(taskList, "WIN KAHOOT!!!!");

taskManager.listTasks(taskList);

fileHandler.saveTasks("./tasks.json", taskList);

/* console.log(taskList) */
