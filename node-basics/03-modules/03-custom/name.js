// 第一步 定义模块
const name = {
    surname:'zhang',
    sayName(){
        console.log(this.surname);
    }
}
const age = {
    age:100
}

// 第二步 暴露模块
module.exports = {
    name,
    age
};

// 也可以使用exports，使用exports的方式和原理如下：

// 方式：
// exports.name = name;
// exports.age = age;

// 原理：
// const exports = module.exports   // exports相当于module.exports的引用
// 如果这样写
// exports = {
//     name,
//     age
// }
// 就不会生效了，因为exports是module.exports引用，exports={name,age}这样写就把之前exports对module.exports引用覆盖掉了。
// 所以可以这样暴露模块
// exports.name = name;
// exports.age = age;
