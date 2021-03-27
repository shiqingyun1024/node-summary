// npx主要是调用测试环境下安装的包或者模块
// 例如现在安装了npm i gulp -D，那我想知道gulp的版本
// 这个时候需要在项目目录下执行
// ./node_modules/.bin/gulp --version

// 使用npx后就比较简单了
// 直接 npx gulp --version   如果没有gulp 会进行安装一个gulp，并且安装到一个临时文件中，用完之后再进行删除，不污染全局的环境。
