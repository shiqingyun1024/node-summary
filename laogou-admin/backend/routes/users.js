var express = require('express');
var router = express.Router();
const {signup,list,remove,signin} = require('../controllers/users')
const { auth } = require('../middlewares/auth')

/* GET users listing. */
router.post('/', signup);
router.get('/', auth,list);
router.delete('/', auth,remove);

router.post('/signin',signin)

module.exports = router;
