const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// webpack是基于node.js的，所以遵循commonjs规范
module.exports = {
    // 模式
    mode: 'development',
    // 入口文件
    entry: {
        app: './src/app.js'
    },

    // 出口文件
    output: {
        filename: 'app.js',
        path: resolve(__dirname, 'dist')
    },

    // 插件plugin的集合
    plugins: [
        // 把打包后的资源引入html中
        new HtmlWebpackPlugin(),
        // copy文件到dist目录下
        // new CopyWebpackPlugin({patterns:[{ from: 'public/favicon.ico', to: 'imgages' }]}),  // CopyWebpackPlugin6.0以上的版本这样使用
        // from to中的to写的是拷贝到dist目录下的哪个文件夹下，如果不写，会直接放在dist目录下
        new CopyWebpackPlugin([
            { from: resolve(__dirname, 'public/favicon.ico') },
            { from: resolve(__dirname, 'public/1.json') }
            //   { from: 'other', to: 'public' },
        ]),
        // 打包的时候每次先清空dist目录
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns:['dist']
        })
    ],

    // 开发服务器
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port: 9000
    }




}