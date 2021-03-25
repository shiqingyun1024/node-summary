// 对比package.json中的scripts中的使用
// "runjs":"node script1.js & node script2.js" 
// 并行执行，不知道谁先执行完

// "runjs":"node script1.js && node script2.js"
// 串行执行，先执行script1.js 再执行script2.js
console.log('1');