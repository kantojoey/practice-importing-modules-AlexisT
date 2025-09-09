const fs = require("fs");
const { stringify } = require("querystring");

function saveTasks(filePath, tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, 2, " "), "utf-8");
}

function loadTasks(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  } else {
    const file = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(file);
  }
}

module.exports = {
  saveTasks,
  loadTasks,
};
