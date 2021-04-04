const crypto = require('crypto')

const password1 = 'abc123'

// crypto是用于加密的操作
// 对password1进行加密
const hash1 = crypto
.createHash('sha1')
.update(password1)
.digest('hex')

console.log(hash1);// 输出的结果：6367c48dd193d56ea7b0baad25b19455e529f5ee

const password2 = 'abc123 456'
// crypto是用于加密的操作
// 对password2进行加密
const hash2 = crypto
.createHash('sha1')
.update(password2)
.digest('hex')

console.log(hash2);// 输出的结果：8dbf3d3fda749d68ef6e1dced1e897b0cd1d0bcd

// 对比password1和password2加密的结果显示是长度都是一样的。

