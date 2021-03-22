// 在node环境下，process可以直接用
// console.log(process.argv.slice(2))
// 执行 node index.js argv1 argv2 后
// 打印的结果是：[ 'argv1', 'argv2' ]

console.log(process.argv)
// 执行 node index.js argv1 argv2 后
// 打印的结果是：
// [
//     '/usr/local/bin/node',
//     '/Users/shixiaolin/Documents/github/Node.js学习系列/node-summary/node-basics/03-process/index.js',
//     'argv1',
//     'argv2'
//   ]
