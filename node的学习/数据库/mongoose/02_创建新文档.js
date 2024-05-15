// 1、安装mongoose
// 2、导入mongoose
const mongoose = require('mongoose');

// 3、链接mongodb服务                   bilibili是数据库的名称  27017是mongodb的默认端口号
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4.设置回调
// 设置连接成功的回调   once 一次  事件回调只执行一次
mongoose.connection.once('open', () => {
    console.log('连接成功');
    //5. 创建文档的结构对象
    //设置集合中文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });
    //6. 创建模型对象  对文档操作的封装对象
    let BookModel = mongoose.model('books', BookSchema);
    //7. 新增
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 19.9
    }, (err, data) => {
        //判断是否有错误
        if (err) {
            console.log(err);
            return;
        }
        // 如果没有出错，则输出插入后的文档对象
        console.log(data);
        // console.log(data);
    });
})


// 设置连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败');
})

// 设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭')
});


// 关闭mongoose的链接
// setTimeout(() => {
//     mongoose.disconnect();
// }, 2000)
