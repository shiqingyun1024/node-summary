var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页的（表单）
router.get('/portrait', (req, res) => {
  res.render('portrait');
});

// 处理文件上传
router.post('/portrait', (req, res) => {
  // 创建form对象
  const form = formidable({});

  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields); // text radio checkbox select
    console.log(files); // file
    res.send('OK')
    // res.json({ fields, files });
  });
})

module.exports = router;
