const {resolve} = require('path')
// webpack是基于node.js的，所以遵循commonjs规范
module.exports = {
    // 入口文件
    entry:{
        app: './src/app.js'
    },

    // 出口文件
    output:{
        filename:'app.js',
        path:resolve(__dirname,'dist')
    },

    // 模式
    mode: 'development'

}