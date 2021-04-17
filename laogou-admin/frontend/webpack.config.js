const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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

    // 插件plugin的集合
    plugins:[
        new HtmlWebpackPlugin({

        })
    ]


    // 模式
    mode: 'development'

}