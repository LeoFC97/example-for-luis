const express = require('express');
const userController = require ('./controllers/user');

const router = express.Router();

router.get('/', userController.getAllUsers)



module.exports = router;
