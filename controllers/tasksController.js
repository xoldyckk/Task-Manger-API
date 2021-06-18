const Task = require("../models/Task");
const asyncWrapperMiddleware = require("../middleware/asyncWrapperMiddleware");
const { createCustomError } = require("../errors/customError");

const getAllTasks = asyncWrapperMiddleware(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapperMiddleware(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapperMiddleware(async (req, res, next) => {
  const task = await Task.findOne({ _id: req.params.taskId });
  if (!task) {
    return next(createCustomError(`No task with id ${req.params.taskId}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapperMiddleware(async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!task) {
    return next(createCustomError(`No task with id ${req.params.taskId}`, 404));
  }

  res.status(200).json({ task });
});

const deleteTask = asyncWrapperMiddleware(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.taskId });
  if (!task) {
    return next(createCustomError(`No task with id ${req.params.taskId}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
