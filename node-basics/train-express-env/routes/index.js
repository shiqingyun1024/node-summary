var express = require('express');
var router = express.Router();
var logger = require('../utils/log')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/data',(req,res,next)=>{
  logger.debug(req.body);
  res.send('ok')
})

module.exports = router;
