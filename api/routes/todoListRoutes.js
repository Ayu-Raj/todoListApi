const express = require("express");
const router = express.Router();
const Task = require("../models/todoListModel");
var todoList = require("../controllers/todoListController");

// todoList Routes

router
  .get("/tasks", todoList.list_all_tasks)
  .post("/tasks", todoList.create_a_task);
router
  .get("/tasks/:taskId", todoList.read_a_task)
  .put("/tasks/:taskId", todoList.update_a_task)
  .delete("/tasks/:taskId", todoList.delete_a_task);

module.exports = router;
