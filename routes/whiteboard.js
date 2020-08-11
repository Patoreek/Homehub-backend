const express = require('express');

const whiteboardController = require('../controllers/whiteboard');


const router = express.Router();

router.post('/addItem', whiteboardController.addItem);

router.post('/deleteItem', whiteboardController.deleteItem);

router.get('/getWhiteboard/:user', whiteboardController.getWhiteboard);






module.exports = router;