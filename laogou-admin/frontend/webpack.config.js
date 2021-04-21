const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// webpack是基于node.js的，所以遵循commonjs规范
module.exports = {
    // 模式
    mode: 'development',

    devtool: 'source-map',
    // 入口文件
    entry: {
        app: './src/app.js'
    },

    // 出口文件
    output: {
        filename: 'js/[name].[hash:8].js',
        path: resolve(__dirname, 'dist')
    },

    // loader的结合
    module: {
        rules: [
           {
               test:/\.art$/,
               exclude:/node_modules/,
               use:["art-template-loader"]
           },
           {
            test:/\.css$/,
            exclude:/node_modules/,
            use:["style-loader","css-loader"]
        }
        ]
    },

    // 插件plugin的集合
    plugins: [
        // 把打包后的资源引入html中，如果HtmlWebpackPlugin中不写template这个参数，HtmlWebpackPlugin会自己创建一个index.html,然后引入打包之后的文件
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // copy文件到dist目录下
        // new CopyWebpackPlugin({patterns:[{ from: 'public/favicon.ico', to: 'imgages' }]}),  // CopyWebpackPlugin6.0以上的版本这样使用
        // from to中的to写的是拷贝到dist目录下的哪个文件夹下，如果不写，会直接放在dist目录下
        new CopyWebpackPlugin([
            { from: resolve(__dirname, 'public/favicon.ico') },
            { from: resolve(__dirname, 'public/libs'),to:resolve(__dirname,'./dist/libs/') }
            //   { from: 'other', to: 'public' },
        ]),
        // 打包的时候每次先清空dist目录
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        })
    ],

    // 开发服务器
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        proxy: {
            "/api": {
                target: "http://localhost:3000"
            }
          }
    }




}