const express = require('express')
const router  = express.Router()
const todoController = require('../controllers/todo-controller')

router.get('/todo', todoController.getAll)
router.get('/todo/:id', todoController.getById)

router.delete('/todo/:id', todoController.deleteTodo)


router.post('/todo', todoController.addTodo)

router.put('/todo/:id', todoController.editTodo)




module.exports = router