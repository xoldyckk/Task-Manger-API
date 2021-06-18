const { Router } = require("express");
const tasksRouter = Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

tasksRouter.route("/").get(getAllTasks).post(createTask);
tasksRouter.route("/:taskId").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = tasksRouter;
