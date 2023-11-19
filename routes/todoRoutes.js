const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();

// Routes
router.get('/', todoController.getAllTodo);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
