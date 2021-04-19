var express = require('express');
var router = express.Router();
const userController = require('../controllers/users')

/* GET users listing. */
router.get('/signup', userController);

module.exports = router;
