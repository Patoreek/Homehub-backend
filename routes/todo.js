const express = require('express');

const todoController = require('../controllers/todo');


const router = express.Router();

router.get('/getList', todoController.getList);

router.post('/addTask', todoController.addTask);

router.post('/deleteTask', todoController.deleteTask);

router.post('/updateCheckbox/:id', todoController.updateCheckbox);





module.exports = router;